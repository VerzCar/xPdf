import { Component, ElementRef, ViewChild } from '@angular/core';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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

      doc.save('jsPdf.pdf');

    } catch (error) {
      console.error(error);
    }

    this.isLoading = false;

  };
}
