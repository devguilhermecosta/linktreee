import Header from '../../components/header';
import Input from '../../components/input';
import './admin.modules.css';
import { useState } from 'react';

export default function Admin() {
  const [ inputName, setInputName ] = useState("");
  const [ inputUrl, setInputUrl ] = useState(""); 
  const [ inputTextColor, setInputTextColor ] = useState("#121212");
  const [ inputBgColor, setInputBgColor ] = useState("#f1f1f1");

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

        <section className="C-admin_result">
          <p>Veja como está ficando</p>
          <article
            style={{ color: inputTextColor, backgroundColor: inputBgColor }}
            >
            <p>{inputName}</p>
          </article>
        </section>

      </form>


    </div>
  )
}
