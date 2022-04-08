import {Component, OnInit} from '@angular/core';
import {ScanService} from "./scan.service";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit{

  constructor(public scanService: ScanService) {

  }

  public ngOnInit() {
    this.startScan();
  }

  private startScan(): void {
    this.scanService.start();
  }

}
