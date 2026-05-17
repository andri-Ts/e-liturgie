import './liturgiePdf.css';

export default function LiturgiePdfTemplate({ data }) {
  const formattedDate = data.date
    ? new Date(data.date).toLocaleDateString('fr-FR', {
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
          <div className="pdf-infos">{data.jour}</div>
          <div className="pdf-entite">
            <strong>Mpanomana:</strong> {data.entite}
          </div>
        </div>
        <div className="right">
          <img src="/logo.png" className="pdf-logo" />
          <div className="pdf-date">{formattedDatee}</div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Fidirana</div>
        <div className="section-content">{data.fidirana}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Fifonana</div>
        <div className="section-content">{data.fifonana}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Voninahitra</div>
        <div className="section-content">{data.voninahitra}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Vakiteny 1</div>
        <div className="section-content">{data.boky1}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Salamo</div>
        <div className="section-content">{data.salamo}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Vakiteny 2</div>
        <div className="section-content">{data.boky2}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Evanjely</div>
        <div className="section-content">{data.boky3}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Fiekem-pinoana</div>
        <div className="section-content">{data.credo}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Ranombavaka</div>
        <div className="section-content">{data.ranombavaka}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Rakitra</div>
        <div className="section-content">{data.rakitra}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Rakitra</div>
        <div className="section-content">{data.rakitra}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Fanolorana</div>
        <div className="section-content">{data.fanolorana}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Masina</div>
        <div className="section-content">{data.masina}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Anamnese</div>
        <div className="section-content">{data.anamnese}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Fisaorana</div>
        <div className="section-content">{data.fisaorana}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Fanirahana</div>
        <div className="section-content">{data.fanirahana}</div>
        <div className="section-page"></div>
      </div>
    </div>
  );
}
