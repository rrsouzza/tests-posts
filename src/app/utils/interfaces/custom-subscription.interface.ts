import { Subscription } from 'rxjs';

export interface CustomSubscription {
  sub: Subscription;
  description: string;
  isActive: boolean;
}
