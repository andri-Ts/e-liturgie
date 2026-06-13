import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useLiturgie } from '../context/LiturgieContext';

export default async function downloadPdf() {
  const input = document.querySelector('.pdf-container');
  if (!input) {
    console.error('pdf-container introuvable');
    return;
  }

  const canvas = await html2canvas(input, {
    scale: 3,
    useCORS: true,
    backgroundColor: '#ffffff',
  });

  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    letterRendering: true,
  });

  // Taille A4
  const pageWidth = 210;
  // const pageHeight = 297;

  // Marges
  const marginX = 10;
  const marginY = 1;

  // Largeur utile
  const contentWidth = pageWidth - marginX * 2;

  // Calcul hauteur proportionnelle
  const contentHeight = (canvas.height * contentWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', marginX, marginY, contentWidth, contentHeight);

  pdf.save('liturgie.pdf');
  // pdf.save(`litorjia-${infosLiturgie.dateMesse}.pdf`);
}
