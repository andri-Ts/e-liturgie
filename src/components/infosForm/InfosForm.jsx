function InfosForm({ infosLiturgie, setInfosLiturgie, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfosLiturgie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="infos">
      <h2>Informations générales</h2>

      <form onSubmit={onSubmit}>
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

          <div className="form-field">
            <label htmlFor="jour">Andro litorjika</label>

            <input
              type="text"
              id="jour"
              name="jourLiturgique"
              value={infosLiturgie.jourLiturgique}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default InfosForm;
