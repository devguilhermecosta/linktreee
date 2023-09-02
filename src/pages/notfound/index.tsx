import './notfound.modules.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="C-notfound_page">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>Você caiu em uma página que não existe.</p>

      <Link to="/">
        voltar para a home
      </Link>
    </div>
  )
}