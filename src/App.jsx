import './App.css'
import StudentCard from './components/StudentCard.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import NewStudentForm from './components/NewStudentForm.jsx'
import { useState } from 'react'

function App() {
 const [etudients, setEtudient] = useState([
  {
  prenom : "Raed",
  nom : "Hasnaoui",
  email : "hasnaouiraed5@gmail.com",
  tel : "98 241 615",
  filiere : "Génie Logiciel et systèmes d'information",
  annee : "2026/27",
  groupe : "GLSI 2",
  ville : "Sidi Alouane",
  age : 19,
  },
  {
  prenom : "Ramez",
  nom : "Hasnaoui",
  email : "hasnaouiramez5@gmail.com",
  tel : "98 241 615",
  filiere : "Génie Logiciel et systèmes d'information",
  annee : "2026/27",
  groupe : "GLSI 2",
  ville : "Sidi Alouane",
  age : 23,
  },
  ]);

  const ajouterEtudient = (newStudent) => {
    console.log([...etudients], newStudent);
    setEtudient([...etudients, newStudent]);
  }

  const supprimerEtudient = (email) => {
    setEtudient(etudients.filter((etudient) => etudient.email !== email));
  }
  
  const modifierEtudient = (email, newInfo) => {
    let nouvEtudients = [];

    etudients.map((etudient) => {
      if (etudient.email === email){
        nouvEtudients = [...nouvEtudients, newInfo];
      }
      else{
        nouvEtudients = [...nouvEtudients, etudient];
      }
    })
    setEtudient([...nouvEtudients])
  }
  const [rech,setRech] = useState("");
  const filtredEtudients = etudients.filter((etudient) => 
    etudient.prenom.toLowerCase().includes(rech.toLowerCase()) ||
    etudient.nom.toLowerCase().includes(rech.toLowerCase()) ||
    etudient.filiere.toLowerCase().includes(rech.toLowerCase())
    );

  return (
    <div className='container'>
      <Header />
      <Navbar />
      <NewStudentForm ajouterEtudient={ajouterEtudient}/>
      <div>
        <label>recherche : </label>
        <input type="text" onChange={(e) => setRech(e.target.value)}/>
      </div>
      <div className='cardsContainer'>
      {filtredEtudients.map((etudient) => (
        <StudentCard
          prenom={etudient.prenom}
          nom={etudient.nom}
          email={etudient.email}
          tel={etudient.tel}
          filiere={etudient.filiere}
          annee={etudient.annee}
          groupe={etudient.groupe}
          ville={etudient.ville}
          age={etudient.age}
          supprimer={supprimerEtudient}
          modifier={modifierEtudient}
          key={etudient.email}
        />
      ))}
      </div>
      <Footer />
    </div>
  )
}

export default App;