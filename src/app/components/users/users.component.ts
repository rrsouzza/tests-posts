import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomSubscriptionService } from 'src/app/services/custom-subscription/custom-subscription.service';
import { UserService } from 'src/app/services/user/user.service';
import { CustomSubscription } from 'src/app/utils/interfaces/custom-subscription.interface';
import { User } from 'src/app/utils/interfaces/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy {
  constructor(
    private userService: UserService,
    private customSubscriptionService: CustomSubscriptionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.customSub.push({
      sub: this.userService.getUsers().subscribe({
        next: (users) => {
          this.usersList = users;
        }
      }),
      description: 'Subscribe to get users',
      isActive: true,
    });

    this.activatedRoute.params.subscribe({
      next: (params) => {
        if (params['id']) {
          this.currentUserId = Number(params['id']);
        }
      }
    });
  }

  usersList: Array<User>;

  customSub: Array<CustomSubscription> = [];

  currentUserId: number;

  ngOnDestroy(): void {
    this.customSubscriptionService.clearSubscriptions(this.customSub);
  }

  handleUserClick(userId: number) {
    this.router.navigate([`users/${userId}`]);
  }

}
