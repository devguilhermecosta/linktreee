import './home.modules.css'
import Social from '../../components/social'
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <main className='C-main'>
        <h1>Dev Guilherme Costa </h1>
        <p>Veja meus links 👇</p>

        <section className='C-links'>
          <a href="">
            <p>Canal do Youtube</p>
          </a>
        </section>
      </main>

      <footer className="C-footer">
        <Social url="https://www.youtube.com">
          <FaFacebook size={35} color="#FFF"/>
        </Social>
        <Social url="https://www.youtube.com">
          <FaYoutube size={35} color="#FFF"/>
        </Social>
        <Social url="https://www.instagram.com">
          <FaInstagram size={35} color="#FFF"/>
        </Social>
      </footer>
    </div>
  )
}
