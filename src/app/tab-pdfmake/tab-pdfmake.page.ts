import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-tab-pdfmake',
  templateUrl: 'tab-pdfmake.page.html',
  styleUrls: ['tab-pdfmake.page.scss']
})
export class TabPdfmakePage {

  isLoading = false;

  constructor() {
  }

  createPdfFromContent(): void {
    this.isLoading = true;

    const data = {
      content: [
        'This shows the specific content that is transformed to a pdf.',
        {
          style: 'tableExample',
          table: {
            body: [
              ['Full name', 'Application for', 'Email address', 'Salary expectation'],
              ['Margot Foster', 'Backend Developer', 'margotfoster@example.com', '$120.000']
            ]
          }
        },
      ]
    };

    try {
      pdfMake.createPdf(data).download('pdfmake-from-content.pdf');
    } catch (error) {
      console.error(error);
    }

    this.isLoading = false;
  };
}
