import { Link } from "react-router-dom"
import { BiLogOut } from 'react-icons/bi'
import { auth } from '../../services/firebaseConnection'
import { signOut } from 'firebase/auth' 
import './header.modules.css'

export default function Header() {
  async function handleLogOut() {
    await signOut(auth);
  }

  return (
    <section>
      <nav className="C-header">
        <section className="C-header_links">
          <Link to="/">home</Link>
          <Link to="/admin">admin</Link>
          <Link to="/admin/social">redes sociais</Link>
        </section>

        <button onClick={handleLogOut} className="C-header_button">
          <BiLogOut size={28} color="#e63d27"></BiLogOut>
        </button>
      </nav>
    </section>
  )
} 