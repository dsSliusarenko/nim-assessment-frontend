import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MenuItem} from "./menuItem";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  private static menuUrl = (): string => `${environment.apiUrl}/menu`;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<MenuItem[]> {
    const url: string = MenuService.menuUrl();
    return this.httpClient.get<MenuItem[]>(url);
  }
}
