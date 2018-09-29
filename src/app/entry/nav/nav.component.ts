import {Component, OnInit} from '@angular/core';
import {Image} from '../../model/image.model';
import {ResourceService} from '../../resource/resource.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  images: Image[];

  constructor(private navService: ResourceService) {
  }

  ngOnInit() {
    this.images = this.navService.getImages();
    console.log(this.images)
  }

  // onSelected() {
  //   this.navservice.
  // }

}
