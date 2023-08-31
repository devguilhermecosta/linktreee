import Header from "../../components/header";
import Input from '../../components/input';
import './networks.modules.css';
import { FormEvent, useState, useEffect } from 'react';
import { db } from '../../services/firebaseConnection';
import { setDoc, doc, getDoc } from 'firebase/firestore';

export default function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  
  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, 'networks', 'links');
      getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook);
          setInstagram(snapshot.data()?.instagram);
          setYoutube(snapshot.data()?.youtube);
        }
      })
      .catch((error) => {
        alert('erro ao renderizar as suas redes sociais: ' + error);
      })
    }

    loadLinks();

  }, [])

  function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (facebook == '' || instagram == '' || youtube == '') {
      alert('todos os campos devem estar preenchidos');
      return
    }

    setDoc(doc(db, 'networks', 'links'), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
    .then(() => {
      alert('salvo com sucesso');
    })
    .catch((error) => {
      alert('erro ao cadastrar as redes sociais: ' + error);
    })
  }


  return (
    <>
      <Header />

      <section className="C-networks">

        <form className="C-networks_form">
          <label htmlFor="facebook">Facebook</label>
          <Input 
            id="facebook"
            type="url"
            placeholder="digite o link para seu Facebook..."
            value={facebook}
            onChange={(e) => {setFacebook(e.target.value)}}
          />

          <label htmlFor="instagram">Instagram</label>
          <Input
            id="instagram"
            type="url"
            placeholder="digite o link para seu Instagram..."
            value={instagram}
            onChange={(e) => {setInstagram(e.target.value)}}
          />

          <label htmlFor="youtube">Youtube</label>
          <Input
            id="youtube"
            type="url"
            placeholder="digite o link para seu canal do Youtube..."
            value={youtube}
            onChange={(e) => {setYoutube(e.target.value)}}
          />

          <button type="submit" onClick={handleRegister}>Salvar links</button>
        </form>
  
      </section>
    </>
  )
}