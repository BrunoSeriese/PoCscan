import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private _name: string = "";
  private _email: string = "";
  private _website: string = "";
  private _ownership: boolean = false;

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
}
