import './App.css'
import StudentCard from './components/StudentCard.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
 const etudients = [
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
  age : 19,
  },
  ]


  return (
    <div className='container'>
      <Header />
      <Navbar />
      {etudients.map((etudient) => (
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
          key={etudient.email}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App;