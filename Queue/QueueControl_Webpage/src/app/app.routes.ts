import { Routes } from '@angular/router';
import { GetQueueComponent } from './pages/get-queue/get-queue.component';
import { ShowQueueComponent } from './pages/show-queue/show-queue.component';
import { ResetQueueComponent } from './pages/reset-queue/reset-queue.component';

export const routes: Routes = [
  { path: '', redirectTo: 'get-queue', pathMatch: 'full' },
  { path: 'get-queue', component: GetQueueComponent },
  { path: 'show-queue', component: ShowQueueComponent },
  { path: 'reset-queue', component: ResetQueueComponent },
  { path: '**', redirectTo: 'get-queue' }
];
