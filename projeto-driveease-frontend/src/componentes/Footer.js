import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className='footerC'>
        <div>
          <h6>Redes Sociais</h6>
          <div><img src='../assets/instagram.png'/>@driveease</div>
          <div><img src='../assets/twitter.png'/>@driveease</div>
          <div><img src='../assets/car-49278_640.jpg'/>driveeaseapp</div>
        </div>
        <div>
          <h6>Contatos</h6>
          <div><img src='../assets/whatsapp.jpg'/>Envie sua mensagem</div>
          <div><img src='../assets/ponto-de-interrogacao.jpg'/>Perguntas frequentes</div>
          <div><img src='../assets/chamada-telefonica.jpg'/>Central de reservas 24h - 0800 999 9999</div>
        </div>
      </footer>
      <div className='footerRights'>
        <h6>©DRIVEEASE - Todos direitos reservados</h6>
        <h6>Configurações de cookies</h6>
      </div>
    </>
  )
}
