import './NewStudentForm.css';

function NewStudentForm ({ajouterEtudient}) {
    const Submit = (e) => {
        e.preventDefault();
        const newStudent = {
            prenom : document.getElementById('prenom').value,
            nom : document.getElementById('nom').value,
            email : document.getElementById('email').value,
            tel : document.getElementById('tel').value,
            filiere : document.getElementById('filiere').value,
            annee : document.getElementById('annee').value,
            groupe : document.getElementById('grp').value,
            ville : document.getElementById('ville').value,
        }
        ajouterEtudient(newStudent);
    };
    return(
        <form onSubmit={Submit}>
            <fieldset>
                <legend>Ajouter un etudient : </legend>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label htmlFor="prenom">Prenom : </label>
                        </td>
                        <td>
                            <input type="text" id="prenom" required />
                        </td>
                        <td>
                            <label htmlFor="nom">Nom : </label>
                        </td>
                        <td>
                            <input type="text" id="nom" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="email">Email : </label>
                        </td>
                        <td>
                            <input type="text" id="email" required/>
                        </td>
                        <td>
                            <label htmlFor="tel">Téléphone  : </label>
                        </td>
                        <td>
                            <input type="text" id="tel" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="filiere">Filière : </label>
                        </td>
                        <td>
                            <input type="text" id="filiere" required/>
                        </td>
                        <td>
                            <label htmlFor="annee">Année d'etude : </label>
                        </td>
                        <td>
                            <input type="text" id="annee" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="grp">Groupe : </label>
                        </td>
                        <td>
                            <input type="text" id="grp" required/>
                        </td>
                        <td>
                            <label htmlFor="ville">Ville : </label>
                        </td>
                        <td>
                            <input type="text" id="ville" required/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <input type="submit" value="Submit" className='submit-btn'/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </form>
    );
}

export default NewStudentForm;