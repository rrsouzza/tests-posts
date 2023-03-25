import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomSubscriptionService } from 'src/app/services/custom-subscription/custom-subscription.service';
import { PostService } from 'src/app/services/post/post.service';
import { CustomSubscription } from 'src/app/utils/interfaces/custom-subscription.interface';
import { PostComment, PostReady } from 'src/app/utils/interfaces/posts.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnChanges, OnDestroy {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private customSubscriptionService: CustomSubscriptionService,
  ) {}

  @Input() post: PostReady;

  @Input() isModalVisible: boolean = false;

  commentList: Array<PostComment> = [];

  customSub: Array<CustomSubscription> = [];

  ngOnInit(): void {
    this.customSub.push({
      sub: this.postService.getPostComments(this.post.id).subscribe({
        next: (comments) => {
          this.commentList = comments;
        },
      }),
      description: 'Subscribe to get post comments',
      isActive: true,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isModalVisible'] && this.isModalVisible && this.post) {
      this.handleOpenComments();
    }
  }

  ngOnDestroy(): void {
    this.customSubscriptionService.clearSubscriptions(this.customSub);
  }

  handleUserClick(userId: number) {
    this.router.navigate([`/users/${userId}`], { relativeTo: this.activatedRoute } );
  }

  handleOpenComments() {
    this.router.navigate([`posts/${this.post.id}/comments`]);
  }

  handleCloseModal() {
    this.router.navigate(['posts']);
  }
}
