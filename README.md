# xPdf

### Demo: [xPdf](https://verzcar.github.io/xPdf)

xPdf is a proof of concept that evaluates several possibilities, based on a feasibility analysis, for creating Pdf files on a web client.

For this purpose, three options have been chosen, which allow to generate a pdf on the client.

For the result of the analysis, see the result at the bottom.

The following Js library and a browser solution were evaluated:

- [jsPdf](https://github.com/parallax/jsPDF)
- [pdfmake](https://github.com/bpampuch/pdfmake)
- standard js with browser support

## Prototype

### [xPdf](https://verzcar.github.io/xPdf)

In order to strengthen the feasibility analysis in its implementation, all solutions were implemented in the prototype.

## Requirement

The requirement is to be able to generate a Pdf on the client. This means that no server-side implementation or support is required.

## Feasibility analysis

In order to generate a PDF on the client, JavaScript is required to write the content and generate the file. For this purpose, 2 of the most commonly used and maintained JavaScript libraries and a standard JavaScript implementation were analyzed and evaluated.

### jsPdf

This library is the most widely used and provides all the functionalities to write a desired content into a Pdf.

The library contains over 80% of the functions needed to map the desired content into a Pdf.

Moreover, it offers ready-made methods to convert the content as HTML directly into a PDF. This allows to use the already created HTML elements that are rendered for the normal website.

Support on all major browsers as well as on mobile devices is not guaranteed.

### pdfmake

This library is moderately common and provides most of the functionality to write a desired content into a Pdf.

The library contains over 70% of the functions to be able to map the desired content into a Pdf.

Support on all major browsers as well as on mobile devices is not guaranteed.

### standard js (browser features)

This JavaScript functionality works with the features of the browser. This allows in a simple way, in a separate window, to display the desired content as a printable document. However, here another step of the user is required to generate the final pdf.

This conversion can map at most a simplified HTML into the desired content of a Pdf.

Support on all major browsers as well as on mobile devices is not guaranteed.

## Feasibility

Based on the analysis, tests and prototype application, it can be said that it is possible to create a pdf on the client side, but I strongly advise against it.

If you want to make a quick image of the current page, you can use one of the 3 options. For creating high quality pdf files and ensuring 100% functionality, it is better to switch to one of the existing server-side solutions.


## License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
