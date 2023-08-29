import Header from '../../components/header';
import Input from '../../components/input';
import './admin.modules.css';
import { useState } from 'react';
import { FiTrash } from 'react-icons/fi';

export default function Admin() {
  const [ inputName, setInputName ] = useState("");
  const [ inputUrl, setInputUrl ] = useState(""); 
  const [ inputTextColor, setInputTextColor ] = useState("#f1f1f1");
  const [ inputBgColor, setInputBgColor ] = useState("#000");

  return (
    <div>
      <Header />

      <form className="C-admin_form">
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
        <article
          className="C-my_links_result"
          >
          <p>meu link</p>
          <button>
            <FiTrash size={18} color="#fff" />
          </button>
        </article>
      </section>


    </div>
  )
}
