import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function downloadPdf() {
  const input = document.querySelector('.pdf-container');

  html2canvas(input, {
    scale: 2,
    useCORS: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('liturgie.pdf');
  });
}
