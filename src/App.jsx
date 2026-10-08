import './App.css'
import imageEtudient from '/src/assets/IMG_20231228_164457_819.jpg';

function App() {
  const etudient = {
  prenom : "Raed",
  nom : "Hasnaoui",
  email : "hasnaouiraed5@gmail.com",
  tel : "98 241 615",
  filiere : "Génie Logiciel et systèmes d'information",
  annee : "2026/27",
  groupe : "GLSI 2",
  ville : "Sidi Alouane",
  age : 19,
  }

  const donneEtudient = [
    {label: "Nom & Prénom", valeur: etudient.nom + " " + etudient.prenom},
    {label: "Email", valeur: etudient.email},
    {label: "Téléphone", valeur: "+216 " + etudient.tel},
    {label: "Filière", valeur: etudient.filiere},
    {label: "Année d'etude", valeur: etudient.annee},
    {label: "Groupe", valeur: etudient.groupe},
    {label: "Ville", valeur: etudient.ville},
  ]

  return (
    <div className="card">
      <div className="card-header">
        <img src={imageEtudient} alt="Image de l'étudiant" className="avatar" />
        <h1>Fiche Étudiant</h1>
      </div>

      <div className="card-body">
        {donneEtudient.map(({ label, valeur }) => (
          <p key={label} className="info-row">
            <span className="info-label">{label} :</span>
            <span className="info-value">{valeur}</span>
          </p>
        ))}
        <button className='btn-contact'>Contacter</button>
      </div>
    </div>
  )
}

export default App;