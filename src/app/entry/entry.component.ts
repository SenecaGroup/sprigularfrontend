import { Component, OnInit } from '@angular/core';
import {CategoryRepository} from '../service/repository/category-repository.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private  categoryRepository: CategoryRepository) {
    console.log(this.categoryRepository);
  }

  ngOnInit() {
  }

}
