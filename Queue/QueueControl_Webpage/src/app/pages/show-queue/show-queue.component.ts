import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-queue',
  standalone: true,
  imports: [],
  templateUrl: './show-queue.component.html',
  styleUrls: ['./show-queue.component.scss']
})
export class ShowQueueComponent implements OnInit {
  queueNumber: string = '';
  timestamp: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = history.state as { queueNumber: string; timestamp: string };

    if (state?.queueNumber) {
      this.queueNumber = state.queueNumber;
      this.timestamp = state.timestamp || new Date().toLocaleString('th-TH');
    } else {
      this.router.navigate(['/get-queue']);
    }
  }

  onBack(): void {
    this.router.navigate(['/get-queue']);
  }
}
