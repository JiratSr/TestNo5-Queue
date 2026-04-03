import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QueueService } from '../../services/queue.service';

@Component({
  selector: 'app-get-queue',
  standalone: true,
  imports: [],
  templateUrl: './get-queue.component.html',
  styleUrls: ['./get-queue.component.scss']
})
export class GetQueueComponent {
  isLoading = false;

  constructor(
    private queueService: QueueService,
    private router: Router
  ) {}

  onGetQueue(): void {
    if (this.isLoading) return;
    this.isLoading = true;

    this.queueService.getNext().subscribe({
      next: (queueNumber: string) => {
        this.isLoading = false;
        this.router.navigate(['/show-queue'], {
          state: {
            queueNumber: queueNumber,
            timestamp: new Date().toLocaleString('th-TH')
          }
        });
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error getting queue:', err);
        alert('ไม่สามารถรับบัตรคิวได้ กรุณาลองใหม่อีกครั้ง');
      }
    });
  }

  onResetQueue(): void {
    this.router.navigate(['/reset-queue']);
  }
}
