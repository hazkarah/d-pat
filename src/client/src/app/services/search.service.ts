import { HttpParams, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class SearchService {

    static SEARCH_URL = "service/map/search";
    static PARAMS = new HttpParams({
      fromObject: {
        format: "json"
      }
    });
    
  constructor(private http: HttpClient) { }

  search(term: string) {
    if (term === "") {
      return of([]);
    }

    return this.http
      .get(SearchService.SEARCH_URL, { params: SearchService.PARAMS.set("key", term) })
      .pipe(map(response => response));
  }
}
