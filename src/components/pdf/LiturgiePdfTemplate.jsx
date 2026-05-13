import './liturgiePdf.css';

export default function LiturgiePdfTemplate({ data }) {
  return (
    <div id="pdf-content" className="pdf-container">
      <div className="pdf-header">
        <div className="left">
          <div className="pdf-title">Litorjia FKMP</div>
          <div className="pdf-infos">
            ALAHADY faha-3 • ANDAVANANDRO • Taona A
          </div>
          <div className="pdf-entite">
            <strong>Mpanomana:</strong> Fifandraisana
          </div>
        </div>
        <div className="right">
          <img src="/logo.png" className="pdf-logo" />
          <div className="pdf-date">17 Mai 2026</div>
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
        <div className="section-title">Evangile</div>
        <div className="section-content">{data.boky3}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Fiekem-pinoana</div>
        <div className="section-content">{data.credo}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Rakitra</div>
        <div className="section-content">{data.rakitra}</div>
        <div className="section-page"></div>
      </div>

      <div className="section">
        <div className="section-title">Komonio</div>
        <div className="section-content">{data.komonio}</div>
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
