import React from 'react';
import FormField from '../../components/formField/FormField';
import { useLocation } from 'react-router-dom';

function LiturgiePage() {
  const location = useLocation(); // permet de récupérer les données envoyés via useNavigate

  const infosLiturige = location.state;

  return (
    <section className="lecture-page">
      <div className="infos">
        <h2>Informations générales</h2>
        <div className="fields-row">
          <FormField type="date" label="Daty" name="date" />
          <FormField type="text" label="Andro litorjika" name="jour" />
          <FormField type="text" label="Vondrona" name="entite" />
        </div>
      </div>
    </section>
  );
}

export default LiturgiePage;
