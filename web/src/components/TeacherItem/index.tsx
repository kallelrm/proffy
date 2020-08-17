import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/26576312?s=460&u=c35c8c5d2f4cc9c116ce5ce22b6a2a4da0750c4d&v=4" alt="Kallel Roman" />
        <div>
          <strong>Kallel Roman</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Texto de testes Texto de testes Texto de testes Texto de testes Texto de testes Texto de testes Texto de testes Texto de testes Texto de testes<br /> <br />

        Texto de testes Texto de testes
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
      </footer>
    </article>
  )
}

export default TeacherItem