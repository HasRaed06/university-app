import imageEtudient from '/src/assets/IMG_20231228_164457_819.jpg';
import editImage from '/src/assets/edit-button.svg';
import applyImage from '/src/assets/tick.svg';
import cancelImage from '/src/assets/x.svg';
import trashImage from '/src/assets/trash.svg';
import './StudentCard.css';
import { useState } from 'react';

function StudentCard(props) {
 
  const [coordonneesVisibles, setCordonneesVisibles] = useState(false);

  const toggle = () => {
    setCordonneesVisibles(!coordonneesVisibles);
  }
  const [edit,setEdit] = useState(false);
  const modifier = () => {
    setCordonneesVisibles(true);
    setEdit(!edit);
  };
  const apply = () => {
    const email = props.email;
    const newInfo = {
      prenom : document.getElementById("prenomModifier").value,
      nom : document.getElementById("nomModifier").value,
      email : document.getElementById("emailModifier").value,
      tel : document.getElementById("telModifier").value,
      filiere : document.getElementById("filiereModifier").value,
      annee : document.getElementById("anneeModifier").value,
      groupe : document.getElementById("groupeModifier").value,
      ville : document.getElementById("villeModifier").value
    }
    props.modifier(email,newInfo);
    modifier();
  };

  return (
    <div className='studentCardContainer container'>
      <div>
        <img src={imageEtudient} alt="Image de l'étudiant" className='pfpImage' />
        <h1>Fiche Étudiant</h1>
      </div>

      <div>
        <table>
          <tbody>
            <tr>
              <td>
                Nom & Prenom : 
              </td>
              <td>
                {edit ? (
                  <>
                    <input type="text" defaultValue={props.nom} id='nomModifier' /> 
                    <input type="text" defaultValue={props.prenom} id='prenomModifier' />
                  </>
                )
                : props.nom + " " + props.prenom}
              </td>
            </tr>
            {coordonneesVisibles && ( 
              <>
                <tr>
                  <td>
                    Email : 
                  </td>
                  <td>
                      {edit ? (<input type="text" defaultValue={props.email} id='emailModifier' />) : props.email}
                  </td>
                </tr>
                <tr>
                  <td>
                    Téléphone : 
                  </td>
                  <td>
                    {edit ? (<input type="text" defaultValue={props.tel} id='telModifier' />) : props.tel}
                  </td>
                </tr>
              </>
            )
            }
            <tr>
              <td>
                Filière : 
              </td>
              <td>
                {edit ? (<input type="text" defaultValue={props.filiere} id='filiereModifier' />) : props.filiere}
              </td>
            </tr>
            <tr>
              <td>
                Année d'etude :
              </td>
              <td>
                {edit ? (<input type="text" defaultValue={props.annee} id='anneeModifier' />) : props.annee}
              </td>
            </tr>
            <tr>
              <td>
                Groupe :
              </td>
              <td>
              {edit ? (<input type="text" defaultValue={props.groupe} id='groupeModifier' />) : props.groupe}
              </td>
            </tr>
            <tr>
              <td>
                Ville :
              </td>
              <td>
                {edit ? (<input type="text" defaultValue={props.ville} id='villeModifier' />) : props.ville}
              </td>
            </tr>
          </tbody>
        </table>
        {edit 
        ? (<>
            <button onClick={modifier} className='cancelBtn iconBtns'>
              <img src={cancelImage} className='cancelImage icons' />
            </button>
            <button onClick={apply} className='applyBtn iconBtns'>
              <img src={applyImage} className='applyImage icons' />
            </button>
          </>
        ):(
          <>
          <button onClick={modifier} className='modifierBtn iconBtns'>
            <img src={editImage} className='editImage icons' />
          </button>         
          <button onClick={() => props.supprimer(props.email)} className='supprimerBtn iconBtns'>
            <img src={trashImage} className='trashImage icons'/>
          </button>
          <div className='bottomBtnsContainer'>
            <button onClick={toggle} className='cordonneesBtn textBtns'>
              {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
            </button>
            <a href={"mailto: "+props.email} >
              <button className='contactBtn textBtns'>Contacter</button>
            </a>
          </div>
        </>
        )
        }
        
      </div>
    </div>
  )
}

export default StudentCard;