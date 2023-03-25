import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomSubscriptionService } from 'src/app/services/custom-subscription/custom-subscription.service';
import { PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';
import { CustomSubscription } from 'src/app/utils/interfaces/custom-subscription.interface';
import { Post, PostReady } from 'src/app/utils/interfaces/posts.interface';
import { User } from 'src/app/utils/interfaces/users.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  constructor(
    private postService: PostService,
    private userService: UserService,
    private customSubscriptionService: CustomSubscriptionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.customSub.push({
      sub: this.postService.getPosts().subscribe({
        next: (posts: Array<Post>) => {
          this.postList = posts;
          this.customSub.push({
            sub: this.userService.getUsers().subscribe({
              next: (users: Array<User>) => {
                this.userList = users;
              },
              error: (err) => {
                console.error('An error occured while trying to retrieve users: ', err);
              },
              complete: () => {
                this.createPostsReady();
              }
            }),
            description: 'Subscribe to getUsers',
            isActive: true,
          });
        },
        error: (err) => {
          console.error('An error occurred while trying to retrieve posts: ', err);
        }
      }),
      description: 'Subscribe to getPosts',
      isActive: true,
    });

    this.activatedRoute.params.subscribe({
      next: (params) => {
        if (params['id']) {
          this.currentPostId = Number(params['id']);
        }
      }
    })
  }

  customSub: Array<CustomSubscription> = [];

  postList: Array<Post>;

  userList: Array<User>;

  postReadyList: Array<PostReady> = [];

  currentPostId: number;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.customSubscriptionService.clearSubscriptions(this.customSub);
  }

  createPostsReady() {
    this.postList.forEach((post) => {
      const user = this.userList.find((user) => user.id === post.userId);
      this.postReadyList.push({...post, username: user ? user.username : '--' });
    });
  }


}
