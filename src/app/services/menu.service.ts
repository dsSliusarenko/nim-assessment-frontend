import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Menu} from "./menu";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  private static menuUrl = (): string => `${environment.apiUrl}/api/menu`;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Menu[]> {
    const url: string = MenuService.menuUrl();
    return this.httpClient.get<Menu[]>(url);
  }
}
