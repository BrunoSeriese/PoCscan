import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ScanService} from "../scan/scan.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router,
              private scanService: ScanService) {
  }

  public submit(name: string, email: string, website: string, ownership: string): void {
    this.scanService.name = name;
    this.scanService.email = email;
    this.scanService.website = website;
    this.scanService.ownership = ownership == "on";

    this.router.navigate(["scan"]);
  }
}
