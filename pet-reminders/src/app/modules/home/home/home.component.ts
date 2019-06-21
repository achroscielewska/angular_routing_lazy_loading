import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeComponentTitle = 'Welcome in Pet Calendar';
  homeComponentDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tortor est, interdum eu velit ac, consectetur rutrum mauris. Etiam sed felis vel diam vestibulum pulvinar. Morbi magna velit, ullamcorper ac porttitor placerat, gravida eu justo. Curabitur pharetra venenatis semper. Nulla facilisi. Nunc vel aliquet leo. Nam hendrerit quam eu leo dictum sodales. Donec dignissim tincidunt laoreet. Ut sollicitudin erat eros, et condimentum dui ultrices eget. Ut in feugiat ipsum.';


  constructor() { }

  ngOnInit() {
  }

}
