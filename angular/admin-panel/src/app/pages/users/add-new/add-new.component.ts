import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { APIEndpoint } from '../../../core/constants/api-endpoint';
import * as uuid from 'uuid';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {

  userForm:FormGroup = new FormGroup('');
  constructor(private fb: FormBuilder, private http: HttpClient, private notification:NzNotificationService) {
    this.userForm = this.fb.group({
      userId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  saveUser() {
    const id = uuid.v4();
    const payload = {
      id,
      ...this.userForm.value
    }


    this.http.post(APIEndpoint.base_url + APIEndpoint.USER_REGISTRATION, payload).subscribe((res: any) => {
        if(res.code === 200) {
          this.userForm.reset();
          this.notification.success('', res.message)
        } else {
          this.notification.info('', res.message)
        }
    })
  }



}
