import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { QueueService } from '../../services/queue.service';

@Component({
  selector: 'app-reset-queue',
  standalone: true,
  imports: [],
  templateUrl: './reset-queue.component.html',
  styleUrls: ['./reset-queue.component.scss']
})
export class ResetQueueComponent implements OnInit {
  isLoading = false;
  currentQueueDisplay = '';
  resetSuccess = false;

  constructor(
    private queueService: QueueService,
    private router: Router,
    private cdr: ChangeDetectorRef  // ✅ เพิ่ม
  ) {}

  ngOnInit(): void {
    this.queueService.getCurrent().subscribe({
      next: (result: string) => {
        this.currentQueueDisplay = result;
        this.cdr.detectChanges();  // ✅ เพิ่ม
      },
      error: (err) => {
        this.currentQueueDisplay = '-';
        this.cdr.detectChanges();  // ✅ เพิ่ม
        console.error('Error getting current queue:', err);
      }
    });
  }

  onReset(): void {
    if (this.isLoading) return;
    this.isLoading = true;
    this.resetSuccess = false;

    this.queueService.reset().subscribe({
      next: (result: string) => {
        this.isLoading = false;
        this.resetSuccess = true;
        this.currentQueueDisplay = result;
        this.cdr.detectChanges();  // ✅ เพิ่ม
      },
      error: (err) => {
        this.isLoading = false;
        this.cdr.detectChanges();  // ✅ เพิ่ม
        console.error('Error resetting queue:', err);
        alert('ไม่สามารถล้างคิวได้ กรุณาลองใหม่อีกครั้ง');
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/get-queue']);
  }
}