import Header from '../../components/header';
import Input from '../../components/input';
import './admin.modules.css';
import { FormEvent, useState, useEffect } from 'react';
import { FiTrash } from 'react-icons/fi';
import { db } from '../../services/firebaseConnection';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore'


interface LinkProps {
  id: string;
  name: string;
  url: string;
  color: string;
  bg: string;
  date: string;
}

export default function Admin() {
  const [ inputName, setInputName ] = useState("");
  const [ inputUrl, setInputUrl ] = useState(""); 
  const [ inputTextColor, setInputTextColor ] = useState("#f1f1f1");
  const [ inputBgColor, setInputBgColor ] = useState("#000000");

  const [links, setLinks] = useState<LinkProps[]>([]);

  
  useEffect(() => {
    const linksRef = collection(db, 'links');
    const queryRef = query(linksRef, orderBy('created', 'desc'));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      const list = [] as LinkProps[];

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          color: doc.data().color,
          bg: doc.data().background,
          date: doc.data().created
        })
      })

      setLinks(list);

    });

    return () => {
      unsub();
    }
  
  }, []);

  function handleRegister(event: FormEvent) {
    event.preventDefault();
    
    if (inputName == '' || inputUrl == '') {
      alert('informe todos os campos');
      return;
    }

    addDoc(collection(db, 'links'), {
      name: inputName,
      url: inputUrl,
      color: inputTextColor,
      background: inputBgColor,
      created: new Date(),
    })
    .then(() => {
      setInputName("");
      setInputUrl("");
      setInputTextColor("#f1f1f1");
      setInputBgColor("#000000");
    })
    .catch((error: string) => {
      console.log('erro ao registrar o link: ' + error);
    })
  }

  async function handleDelete(id: string) {
    const confirm = window.confirm('deseja realmente deletar este link?');
    if (confirm) {
      const linkRef = doc(db, 'links', id);
      await deleteDoc(linkRef);
    }
  }

  return (
    <div>
      <Header />

      <form className="C-admin_form" onSubmit={handleRegister}>
        <div className="C-admin_form_div">
          <label>Nome do Link</label>
          <Input
            type="text"
            placeholder="Digite o nome do link..."
            value={inputName}
            onChange={(e) => {setInputName(e.target.value)}}
          />
        </div>

        <div className="C-admin_form_div">
          <label>Url do Link</label>
          <Input
            type="text"
            placeholder="Digite a url..."
            value={inputUrl}
            onChange={(e) => {setInputUrl(e.target.value)}}
          />
        </div>

        <section className="C-admin_form_colors">
          <div className="C-admin_form_div">
            <label>Cor do Link</label>
            <Input
              type="color"
              value={inputTextColor}
              onChange={(e) => {setInputTextColor(e.target.value)}}
            />
          </div>

          <div className="C-admin_form_div">
            <label>Cor do Fundo</label>
            <Input
              type="color"
              value={inputBgColor}
              onChange={(e) => {setInputBgColor(e.target.value)}}
            />
          </div>
        </section>

        {inputName !== '' && (
          <section className="C-admin_result">
            <p>Veja como está ficando</p>
            <article
              style={{ color: inputTextColor, backgroundColor: inputBgColor }}
              >
              <p>{inputName}</p>
            </article>
          </section>
        )}

        <button
          className="C-admin_form_button"
          type="submit">
          Cadastrar
        </button>
      </form>

      <h1 className="C-my_links_title">Meus links</h1>

      <section className='C-my_links'>

        {links.map( (item) => (
          <article
            key={item.id}
            className="C-my_links_result"
            style={{ color: item.color, backgroundColor: item.bg }}
          >
            <p>{item.name}</p>
            <button onClick={() => {handleDelete(item.id)}}>
              <FiTrash size={18} color="#fff" />
            </button>
          </article>
        ))}

      </section>
    </div>
  )
}
