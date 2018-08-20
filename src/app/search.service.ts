/* From web site https://itnext.io/using-angular-6-material-auto-complete-with-async-data-6d89501c4b79 */

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
/* To fix map is not a function from web site https://stackoverflow.com/questions/34515173/angular-http-get-with-typescript-error-http-get-map-is-not-a-function-in-n */ 
import 'rxjs/add/operator/map'
import {tap} from 'rxjs/operators';
import {SearchUser, IUserResponse} from './search-user.class'

@Injectable()
export class SearchService {

   constructor(private http: HttpClient) {}

  search(filter: {name: string} = {name: ''}, page = 1): Observable<SearchUser[]> {
     /* original version of http get below -- updated it so that it treats the response as array instead of IUserResponse 
    return this.http.get<IUserResponse>('/api/searchusers') */
    return this.http.get<SearchUser[]>('/api/searchusers').map(users => users.filter(user => user.name.includes(filter.name))); 
     /* original version of flow below -- updated it so that it treats the response as array of SearchUsers and filter done directly on
     response array of values
    .pipe(
      /* original version of tap below -- updated it so that it treats the response as array of SearchUsers 
      tap((response: IUserResponse) => {
        response.results = response.results
          .map(user => new SearchUser(user.id, user.name))
          // Not filtering in the server since in-memory-web-api has somewhat restricted api
          .filter(user => user.name.includes(filter.name))

        return response;
      }) -- end tap
      
     
      );  -- end pipe
      */
  }

}
