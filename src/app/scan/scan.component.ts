import {Component, OnInit} from '@angular/core';
import {ScanService} from "./scan.service";
import {ToastrService} from "ngx-toastr";
import {PdfService} from "../pdf/pdf.service";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  constructor(public scanService: ScanService,
              private toastr: ToastrService,
              private pdfService: PdfService) {
  }

  public ngOnInit() {
    this.startScan();
  }

  private startScan(): void {
    this.scanService.start();
  }

  public mailResults(): void {
    this.toastr.success("Resultaten verzonden", "", {
      tapToDismiss: true,
      positionClass: "toast-bottom-right",
      timeOut: 1500
    });
    this.pdfService.generatePDF(this.scanService.scanCategories, this.scanService.name, this.scanService.website);
  }

}
