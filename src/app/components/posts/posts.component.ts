import { Component, OnInit, OnDestroy } from '@angular/core';
import { merge } from 'rxjs';
import { CustomSubscriptionService } from 'src/app/services/custom-subscription/custom-subscription.service';
import { PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';
import { CustomSubscription } from 'src/app/utils/interfaces/custom-subscription.interface';
import { Post } from 'src/app/utils/interfaces/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  constructor(
    private postService: PostService,
    private userService: UserService,
    private customSubscriptionService: CustomSubscriptionService
  ) {
    this.customSub.push({
      sub: this.postService.getPosts().subscribe({
        next: (res: Array<Post>) => {
          // console.log('res: ', res);
          this.postList = res;
        },
      }),
      description: 'Subscribe to getPosts',
      isActive: true,
    });

    // // merge([this.postService.getPosts(), this.userService.getUsers()]).subscribe({
    // //   next: (res) => {
    // //     console.log('res: ', res);
    // //   }
    // // })
  }

  customSub: Array<CustomSubscription> = [];

  postList: Array<Post>;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.customSubscriptionService.clearSubscriptions(this.customSub);
  }
}
