import {Injectable} from '@angular/core';
import {ScanCategoryType} from "./scan-category.type";
import {Iterator} from "./iterator.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private _name: string = "";
  private _email: string = "";
  private _website: string = "https://www.google.com/";
  private _ownership: boolean = false;
  private _scanCategories: ScanCategoryType[] = [];

  constructor(private http: HttpClient) {
    this._scanCategories.push({title: "Headers", path: "", loading: false});
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get ownership(): boolean {
    return this._ownership;
  }

  set ownership(value: boolean) {
    this._ownership = value;
  }

  get scanCategories(): ScanCategoryType[] {
    return this._scanCategories;
  }

  set scanCategories(value: ScanCategoryType[]) {
    this._scanCategories = value;
  }

  private filterWebsite() {
    let searchValues: string[] = [
      "https://",
      "http://"
    ]
    for (let searchValue of searchValues) {
      if(this.website.startsWith(searchValue)) {
        this.website = this.website.slice(searchValue.length, this.website.length - 1)
      }
    }
    let pathIndex = this.website.indexOf("/") > -1 ? this.website.indexOf("/") : this.website.length;
    this.website = this.website.slice(0, pathIndex);
  }

  public start(): void {
    this.filterWebsite();
    let iterator: Iterator<ScanCategoryType> = new Iterator<ScanCategoryType>(this._scanCategories);
    this.scan(iterator);
  }

  private async scan(iterator: Iterator<ScanCategoryType>): Promise<void> {
    if (!iterator.hasNext()) {
      return;
    }
    let scanCategory = iterator.next();
    scanCategory.loading = true;

    this.headerScan(scanCategory);

    this.scan(iterator);
  }

  private headerScan(scanCategory: ScanCategoryType): void {
    this.invokeHeaderScan()
      .subscribe( (value: any) => {
        scanCategory.grade = value['grade'];
        let scanId: number = value['scan_id'];
        return this.getHeaderScanResult(scanId)
          .subscribe((value: any) => {
            scanCategory.result = value;
          });
      });
  }

  private invokeHeaderScan(): Observable<any> {
    return this.http.get("https://http-observatory.security.mozilla.org/api/v1/analyze?host=" + this.website);
  }

  private getHeaderScanResult(scanId: any): Observable<any> {
    return this.http.get("https://http-observatory.security.mozilla.org/api/v1/getScanResults?scan=" + scanId);
  }
}
