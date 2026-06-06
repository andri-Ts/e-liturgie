import './liturgiePdf.css';

export default function LiturgiePdfTemplate({ infosLiturgie, elements }) {
  const formattedDate = infosLiturgie.dateMesse
    ? new Date(infosLiturgie.dateMesse).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  return (
    <div id="pdf-content" className="pdf-container">
      <div className="pdf-header">
        <div className="left">
          <div className="pdf-title">Litorjia FKMP</div>

          <div className="pdf-infos">{infosLiturgie.jourLiturgique}</div>

          <div className="pdf-entite">
            <strong>Mpanomana :</strong> {infosLiturgie.entite}
          </div>
        </div>

        <div className="right">
          <img src="/logo.png" className="pdf-logo" />

          <div className="pdf-date">{formattedDate}</div>
        </div>
      </div>

      {elements.map((element) => (
        <div key={element.id} className="section">
          <div className="section-title">{element.label}</div>

          <div className="section-content">{renderElementContent(element)}</div>

          <div className="section-page">{element.data.page}</div>
        </div>
      ))}
    </div>
  );
}

function renderElementContent(element) {
  switch (element.type) {
    case 'chant':
      return (
        <>
          {element.data.titre}

          {/* {element.data.page && <> (p.{element.data.page})</>} */}
        </>
      );

    case 'lecture':
    case 'psaume':
      return element.data.reference;

    default:
      return '';
  }
}
