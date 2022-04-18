import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ScanService} from "../scan/scan.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router,
              private scanService: ScanService) {
  }

  public submit(name: HTMLInputElement, email: HTMLInputElement, website: HTMLInputElement, ownership: HTMLInputElement, form: NgForm): boolean {
    if(form.invalid) {
      ownership.reportValidity() || website.reportValidity() || email.reportValidity() || name.reportValidity();
      return false;
    }

    this.scanService.name = name.value;
    this.scanService.email = email.value;
    this.scanService.website = website.value;
    this.scanService.ownership = ownership.value == "on";

    this.router.navigate(["scan"]);
    return true;
  }
}
