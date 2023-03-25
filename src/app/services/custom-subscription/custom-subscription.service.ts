import { Injectable } from '@angular/core';
import { CustomSubscription } from 'src/app/utils/interfaces/custom-subscription.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomSubscriptionService {
  clearSubscriptions(subs: Array<CustomSubscription>) {
    subs.forEach((subObj) => {
      subObj.isActive = false;
      subObj.sub.unsubscribe();
    });
  }
}
