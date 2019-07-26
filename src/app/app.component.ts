import { Component, OnInit } from '@angular/core';
import { of, from }  from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  
  ngOnInit() {
    of('Apple','Bat','Catch').subscribe(console.log);

    from(['Test','Log']).subscribe(
      fromItem => console.log(`From Item are : ${fromItem}`),
      err => console.log(`Error occured : ${err}`),
      () => console.log('Completed')
    );
  }
}
