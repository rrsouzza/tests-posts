import { Component, Input } from '@angular/core';
import { User } from 'src/app/utils/interfaces/users.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input() user: User;

  @Input() isModalVisible: boolean = false;

  handleCloseModal() {

  }
}
