import {Component, Input, OnInit} from '@angular/core';
import {Image} from './nav.model';
import {NavService} from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  images: Image[];

  constructor(private navService: NavService) {
    this.images = this.navService.getImages();
  }

  ngOnInit() {

  }

  // onSelected() {
  //   this.navservice.
  // }

}
