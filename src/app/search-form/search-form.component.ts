/* From web site https://itnext.io/using-angular-6-material-auto-complete-with-async-data-6d89501c4b79 */
import { Component, OnInit } from '@angular/core';
import {SearchDoc, IUserResponse} from '../search-user.class';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SearchService} from '../search.service';
import {switchMap, debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  filteredDocs: Observable<SearchDoc[]>;
  usersForm: FormGroup;
  
  constructor(private fb: FormBuilder, private searchService: SearchService) {}

  ngOnInit() {
    this.usersForm = this.fb.group({
      userInput: null
    })

    this.filteredUsers = this.usersForm.get('userInput').valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => this.searchService.search({name: value}, 1))
      );
  }

  displayFn(doc: SearchDoc) {
    if (doc) { return doc.value; }
  }

}
