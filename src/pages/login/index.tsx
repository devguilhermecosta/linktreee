import { Link } from 'react-router-dom'
import './login.modules.css'

export default function Login() {
  return (
    <section className="C-login">
      <Link to="/">
        <h1>
          Dev
          <span className="C-login_logo_span">Link</span>
        </h1>
      </Link>
    </section>
  )
}