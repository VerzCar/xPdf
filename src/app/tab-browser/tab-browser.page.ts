import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-browser',
  templateUrl: 'tab-browser.page.html',
  styleUrls: ['tab-browser.page.scss']
})
export class TabBrowserPage {

  isLoading = false;

  constructor() {
  }

  createPdf(): void {
    this.isLoading = true;

    try {
      const pdfBlockElement = document.getElementById('pdfContentBlock');
      const printWindow = window.open('', '', 'popup');
      printWindow.document.write('<html><head><title>xPdf print with browser</title>');
      // // add css styling
      printWindow.document.write('</head><body >');
      printWindow.document.write(pdfBlockElement.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.print();
      printWindow.close();
    } catch (error) {
      console.error(error);
    }

    this.isLoading = false;
  };

}
