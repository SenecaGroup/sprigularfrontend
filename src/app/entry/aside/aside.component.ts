import { Component, OnInit } from '@angular/core';
import {CategoryRepository} from '../../service/repository/category-repository.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  categories: any[];
  error: string;
  constructor(private categoryRepository: CategoryRepository) {

  }

  ngOnInit() {
    this.categoryRepository.getAll().subscribe(response => {
      console.log(response);
      if(response.status == 200) {
        this.categories = response.data;
      } else {
        this.error = 'Bad Request';
      }
    });
  }

}
