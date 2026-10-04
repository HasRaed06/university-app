import './App.css'
import imageEtudient from '/src/assets/IMG_20231228_164457_819.jpg';

function App() {
  const prenom = "Raed";
  const nom = "Hasnaoui";
  const email = "hasnaouiraed5@gmail.com"
  const tel = "98 241 615";
  const filiere = "Génie Logiciel et systèmes d'information";
  const annee = "2026/27";
  const groupe = "GLSI 2";
  const ville = "Sidi Alouane";
  const age = 19;

  const donneEtudient = [
    {label: "Nom & Prénom", valeur: nom + " " + prenom},
    {label: "Email", valeur: email},
    {label: "Téléphone", valeur: "+216 " + tel},
    {label: "Filière", valeur: filiere},
    {label: "Année d'etude", valeur: annee},
    {label: "Groupe", valeur: groupe},
    {label: "Ville", valeur: ville},
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