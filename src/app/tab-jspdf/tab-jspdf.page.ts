import { Component, ElementRef, ViewChild } from '@angular/core';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tab-jspdf',
  templateUrl: 'tab-jspdf.page.html',
  styleUrls: ['tab-jspdf.page.scss']
})
export class TabJspdfPage {

  @ViewChild('pdfBlock') pdfBlock: ElementRef;

  isLoading = false;

  constructor() {
  }

  async createPDF(): Promise<void> {
    this.isLoading = true;

    const pdfBlockElement = document.getElementById('pdfBlock');
    const blockWidth = pdfBlockElement.clientWidth;
    const blockHeight = pdfBlockElement.clientHeight;
    const pdfWidth = blockWidth + (15 * 2);
    const pdfHeight = (pdfWidth * 1.5) + (15 * 2);
    const marginLeftRight = 5;
    const marginTobBottom = 5;

    try {
      const doc = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);
      const pageCount = Math.ceil(blockHeight / pdfHeight) - 1;

      const canvas = await html2canvas(pdfBlockElement, { useCORS: true });
      canvas.getContext('2d');

      const imageUri = canvas.toDataURL('image/png', 1.0);
      doc.addImage(
        imageUri,
        'PNG',
        marginLeftRight,
        marginTobBottom,
        blockWidth,
        blockHeight);

      for (let i = 1; i <= pageCount; i++) {
        doc.addPage([pdfWidth, pdfHeight]);
        doc.addImage(
          imageUri,
          'PNG',
          marginLeftRight,
          -(pdfHeight * i) + marginTobBottom,
          blockWidth,
          blockHeight);
      }

      doc.save('jsPdf-as-image.pdf');

    } catch (error) {
      console.error(error);
    }

    this.isLoading = false;

  };

  async createHtmlPdf(): Promise<void> {
    this.isLoading = true;

    const pdfBlockElement = document.getElementById('pdfBlock');
    const blockWidth = pdfBlockElement.clientWidth;
    const pdfWidth = blockWidth + (15 * 2);
    const pdfHeight = (pdfWidth * 1.5) + (15 * 2);

    try {
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
        putOnlyUsedFonts: true,
      });

      await doc.html(
        pdfBlockElement,
        {
          x: 15,
          y: 15,
          html2canvas: {
            useCORS: true
          },
          callback: jsPdfDoc => {
            jsPdfDoc.save('jsPdf-from-html.pdf');
          },
        });

    } catch (error) {
      console.error(error);
    }

    this.isLoading = false;
  };

  createPdfFromContent(): void {
    this.isLoading = true;

    const data = [];
    const columns = ['Full name', 'Application for', 'Email address', 'Salary expectation'];

    data.push({
      'Full name': 'Margot Foster',
      'Application for': 'Backend Developer',
      'Email address': 'margotfoster@example.com',
      'Salary expectation': '$120.000',
    });

    try {
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
      });

      doc.text(
        'This shows the specific content that is transformed to a pdf.',
        5,
        15,
      );
      doc.table(
        5,
        25,
        data,
        columns,
        {
          autoSize: true,
          printHeaders: true,
          headerTextColor: '#6B7280',
          headerBackgroundColor: '#ffffff'
        }
      );

      doc.save('jsPdf-from-content.pdf');

    } catch (error) {
      console.error(error);
    }

    this.isLoading = false;
  };

}
