import './liturgiePdf.css';

export default function LiturgiePdfTemplate({ data }) {
  return (
    <div id="pdf-content" className="pdf-container">
      <div className="pdf-header">
        <div></div>

        <div>
          <div className="pdf-title">
            ALAHADY VOALOHANY – FIAVIAN’NY TOMPO - TAONA A
          </div>
          <div className="pdf-subtitle">
            {data.date} - {data.jour}
          </div>
        </div>

        <img src="/logo.png" className="pdf-logo" />
      </div>

      <div className="section">
        <div className="section-title">Fidirana</div>
        <div className="section-content">{data.fidirana}</div>
      </div>

      <div className="section">
        <div className="section-title">Fifonana</div>
        <div className="section-content">{data.fifonana}</div>
      </div>

      <div className="section">
        <div className="section-title">Vakiteny 1</div>
        <div className="section-content">{data.boky1}</div>
      </div>

      <div className="section">
        <div className="section-title">Salamo</div>
        <div className="section-content">{data.salamo}</div>
      </div>

      <div className="section">
        <div className="section-title">Vakiteny 2</div>
        <div className="section-content">{data.boky2}</div>
      </div>

      <div className="section">
        <div className="section-title">Evangile</div>
        <div className="section-content">{data.boky3}</div>
      </div>

      <div className="section">
        <div className="section-title">Fiekem-pinoana</div>
        <div className="section-content">{data.credo}</div>
      </div>

      <div className="section">
        <div className="section-title">Rakitra</div>
        <div className="section-content">{data.rakitra}</div>
      </div>

      <div className="section">
        <div className="section-title">Komonio</div>
        <div className="section-content">{data.komonio}</div>
      </div>

      <div className="section">
        <div className="section-title">Fisaorana</div>
        <div className="section-content">{data.fisaorana}</div>
      </div>

      <div className="section">
        <div className="section-title">Fanirahana</div>
        <div className="section-content">{data.fanirahana}</div>
      </div>
    </div>
  );
}
