import './home.modules.css';
import Social from '../../components/social';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import { collection, doc, getDocs, getDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { useEffect, useState } from 'react';


interface LinkProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

interface SocialProps {
  facebook: string;
  instagram: string;
  youtube: string;
}

export default function Home() {
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialProps>();

  useEffect(() => {
    function loadLinks() {
      const docRef = collection(db, 'links');  // abre a tabela do db
      const queryRef = query(docRef, orderBy('created', 'asc'));  // faz a consulta e ordena

      getDocs(queryRef)  // pega todos os documentos
      .then((snapshot) => {  // snapshot é a query com todos os documentos
        const list = [] as LinkProps[];
        snapshot.forEach((doc) => {  // iteramos sobre cada documento
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().background,
            color: doc.data().color
          })
        })

        setLinks(list);
  
      })
    }

    loadLinks();

  }, [])

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, 'networks', 'links');
      getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data()?.facebook,
            instagram: snapshot.data()?.instagram,
            youtube: snapshot.data()?.youtube
          })
        }
      })
    }

    loadSocialLinks();

  }, [])

  return (
    <div>
      <main className='C-main'>
        <h1>Dev Guilherme Costa </h1>
        <p>Veja meus links 👇</p>

        { links && (
          links.map((link) => (
            <section
              key={link.id}
              className='C-links'>
              <a
                href={link.url} target='_blank'
                style={{ color: link.color, backgroundColor: link.bg }}
                >
                <p>{link.name}</p>
              </a>
            </section>
          ))
        ) }
      </main>

      { socialLinks && Object.keys(socialLinks).length > 0 && (
        <footer className="C-footer">
          <Social url={socialLinks?.facebook}>
            <FaFacebook size={35} color="#FFF"/>
          </Social>
          <Social url={socialLinks?.youtube}>
            <FaYoutube size={35} color="#FFF"/>
          </Social>
          <Social url={socialLinks?.instagram}>
            <FaInstagram size={35} color="#FFF"/>
          </Social>
        </footer>
      ) }

    </div>
  )
}
