import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/input'
import './login.modules.css'
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleForm(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      alert('digite um usuário e senha');
      return
    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate('/admin', { replace: true });
    })
    .catch(() => {
      console.log('erro ao fazer login')
    })
  }

  return (
    <section className="C-login">
      <Link to="/">
        <h1>
          Dev
          <span className="C-login_logo_span">Link</span>
        </h1>
      </Link>
      <form
        className="C-login_form"
        onSubmit={handleForm}
        >
        <Input
          type="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder='Digite seu email...'
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          placeholder="senha"
        />
        <button type="submit" className="C-login_button">
          acessar
        </button>
      </form>
    </section>
  )
}