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
        <div className="section-content">fidirana</div>
        <div className="section-page">156</div>
      </div>

      <div className="section">
        <div className="section-title">Fifonana</div>
        <div className="section-content">fifonana</div>
        <div className="section-page">78</div>
      </div>

      <div className="section">
        <div className="section-title">Vakiteny 1</div>
        <div className="section-content">boky1</div>
        <div className="section-page">67</div>
      </div>

      <div className="section">
        <div className="section-title">Salamo</div>
        <div className="section-content">salamo</div>
        <div className="section-page">78</div>
      </div>

      <div className="section">
        <div className="section-title">Vakiteny 2</div>
        <div className="section-content">boky2</div>
        <div className="section-page">54</div>
      </div>

      <div className="section">
        <div className="section-title">Evangile</div>
        <div className="section-content">boky3</div>
        <div className="section-page">45</div>
      </div>

      <div className="section">
        <div className="section-title">Fiekem-pinoana</div>
        <div className="section-content">credo</div>
        <div className="section-page">58</div>
      </div>

      <div className="section">
        <div className="section-title">Rakitra</div>
        <div className="section-content">rakitra</div>
        <div className="section-page">7</div>
      </div>

      <div className="section">
        <div className="section-title">Komonio</div>
        <div className="section-content">komonio</div>
        <div className="section-page">87</div>
      </div>

      <div className="section">
        <div className="section-title">Fisaorana</div>
        <div className="section-content">fisaorana</div>
        <div className="section-page">78</div>
      </div>

      <div className="section">
        <div className="section-title">Fanirahana</div>
        <div className="section-content">fanirahana</div>
        <div className="section-page">78</div>
      </div>
    </div>
  );
}
