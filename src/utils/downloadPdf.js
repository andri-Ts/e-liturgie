import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';

const downloadPdf = async () => {
  const element = document.getElementById('pdf-content');

  // capture du HTML
  const canvas = await html2canvas(element, {
    scale: 2, // meilleure qualité
  });

  // transforme en image
  const imageData = canvas.toDataURL('image/png');

  // création pdf
  const pdf = new jsPDF({
    orientation: 'portrait',

    unit: 'mm',

    format: 'a4',
  });

  // dimensions PDF
  const pdfWidth = pdf.internal.pageSize.getWidth();

  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  // ajoute image
  pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  // télécharge
  pdf.save('liturgie.pdf');
};

export default downloadPdf;
