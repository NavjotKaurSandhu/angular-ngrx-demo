import { HttpClient } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Book } from "../../models/book.model";

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private _httpClient: HttpClient) {}

  getBookList(): Observable<Book[]|any> {
    return this._httpClient
      .get(`${environment.baseAPIUrl}/books`)
      .pipe(catchError((error) => throwError(() => new Error(error))));
  }
}
