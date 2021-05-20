import { Component, OnInit } from '@angular/core';
import { NotificationService } from './service/notification.service';
import { interval } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private notificationService: NotificationService,private toastr : ToastrService)
  {
  }
  ngOnInit()
  {

   
    // interval(1000,() =>{
    //   console.log("test");
    // })
    // interval(1000 * 5).subscribe(
    //   res=>{
    //     //console.log("test");
    //     this.notificationService.success("Test","message"+this.randomIntFromInterval(10,100));
    //   }
    // );
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
}
