import {Injectable} from '@angular/core';
import {ScanCategoryType} from "./scan-category.type";
import {Iterator} from "./iterator.model";
import {Executor} from "@angular/compiler-cli/ngcc/src/execution/api";

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private _name: string = "";
  private _email: string = "";
  private _website: string = "";
  private _ownership: boolean = false;
  private _scanCategories: ScanCategoryType[] = [];

  constructor() {
    this._scanCategories.push({title:"Headers", path:"", loading:false});
    this._scanCategories.push({title:"XSS and Injection", path:"", loading:false});
    this._scanCategories.push({title:"Certificates", path:"", loading:false});
    this._scanCategories.push({title:"WordPress Vulnerabilities", path:"", loading:false});
    this._scanCategories.push({title:"Version", path:"", loading:false});
    this._scanCategories.push({title:"Login", path:"", loading:false});
    this._scanCategories.push({title:"Data Security", path:"", loading:false});
    this._scanCategories.push({title:"SEO", path:"", loading:false});
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

  public start(): void {
    let iterator: Iterator<ScanCategoryType> = new Iterator<ScanCategoryType>(this._scanCategories);
    this.scan(iterator);
  }

  private async scan(iterator: Iterator<ScanCategoryType>): Promise<void> {
    if (!iterator.hasNext()) {
      return;
    }
    let scanCategory = iterator.next();
    scanCategory.loading = true;

    await new Promise(r => setTimeout(r, 5 * 1000));

    scanCategory.result = Math.floor(Math.random() * 10) + 1;

    this.scan(iterator);
  }
}
