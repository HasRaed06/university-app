import imageEtudient from '/src/assets/IMG_20231228_164457_819.jpg';
import './StudentCard.css';

function StudentCard(props) {
  
  const donneEtudient = [
    {label: "Nom & Prénom", valeur: props.nom + " " + props.prenom},
    {label: "Email", valeur: props.email},
    {label: "Téléphone", valeur: "+216 " + props.tel},
    {label: "Filière", valeur: props.filiere},
    {label: "Année d'etude", valeur: props.annee},
    {label: "Groupe", valeur: props.groupe},
    {label: "Ville", valeur: props.ville},
  ] 

  return (
    <div className='container'>
      <div>
        <img src={imageEtudient} alt="Image de l'étudiant" />
        <h1>Fiche Étudiant</h1>
      </div>

      <div>
        {donneEtudient.map(({ label, valeur }) => (
          <p key={label}>
            {label} : {valeur}
          </p>
        ))}
        <a href={"mailto: "+props.email}>
          <button>Contacter</button>
        </a>
      </div>
    </div>
  )
}

export default StudentCard;