import './infosForm.css';

function InfosForm({ infosLiturgie, setInfosLiturgie, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfosLiturgie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="infos-card">
      <div className="infos-header">
        <h2>Informations générales</h2>
      </div>

      <form className="infos-form" onSubmit={onSubmit}>
        {/* Daty + Vondrona */}
        <div className="fields-row">
          <div className="form-field">
            <label htmlFor="date">Daty</label>

            <input
              type="date"
              id="date"
              name="dateMesse"
              value={infosLiturgie.dateMesse}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="entite">Vondrona</label>

            <input
              type="text"
              id="entite"
              name="entite"
              value={infosLiturgie.entite}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="infos-actions">
          <button type="submit">Haka vakiteny</button>
        </div>
      </form>
    </section>
  );
}

export default InfosForm;
