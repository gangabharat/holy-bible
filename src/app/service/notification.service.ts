import { Injectable } from '@angular/core';
import { ComponentType, IndividualConfig, ProgressAnimationType, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  /**
   * info
   */
  public info(title : string, message : string, notificationOptions? : NotificationOptions) {
    this.toastr.info(message,title, notificationOptions);
  }

  /**
   * success
   */
  public success(title : string, message : string, notificationOptions? : NotificationOptions) {
    this.toastr.success(message,title, notificationOptions);
  }

  /**
 * warning
 */
  public warning(title : string, message : string, notificationOptions? : NotificationOptions) {
    this.toastr.warning(message,title, notificationOptions);
  }

  /**
   * error
   */
  public error(title : string, message : string, notificationOptions? : NotificationOptions) {
   this.toastr.error(message,title, notificationOptions);
  }

  /**
 * show
 */
  public show(title : string, message : string, notificationOptions? : NotificationOptions) {
    this.toastr.show(message,title, notificationOptions);
  }
}

export class NotificationOptions implements Partial<IndividualConfig> {
  // disableTimeOut: boolean | 'timeOut' | 'extendedTimeOut';
  // extendedTimeOut: number;
  // progressAnimation: ProgressAnimationType;
  // toastClass: string;
  // titleClass: string;
  // messageClass: string;
  // easing: string;
  // easeTime: string | number;
  // tapToDismiss: boolean;
  // toastComponent?: ComponentType<any>;
  // onActivateTick: boolean;
  // newestOnTop: boolean;
  // url: string = "test";
  // body?: any
  // cacheMins?: number
  timeOut?: number = 1000 * 30;
  closeButton?: boolean = true;  
  enableHtml?: boolean = true;
  progressBar?: boolean = true;
  from?: string = "bottom";
  align?: string = "right";
  positionClass?: string = 'toast-' + this.from + '-' + this.align;
}

