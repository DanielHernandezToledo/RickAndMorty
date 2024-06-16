import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MiApi from './components/MiApi';
import { useState } from 'react';
import './App.css';
import Buscador from './components/Buscador';

export default function App() {

  return (
    <>
      <Navbar bg="black" data-bs-theme="dark" style={{ maxHeight: 60 + 'px' }}>
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="#home"><img src="\icons\Rick-and-Morty.png" alt="Rick and Morty logo" style={{ width: 120 + 'px' }} /></Navbar.Brand>s
          </Nav>
          <Nav>
            <Nav.Link >Characters</Nav.Link>
            <Nav.Link >Locations</Nav.Link>
            <Nav.Link >Episodes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="bgimg">
        <div className="overlay">
          <div className="container">
          <h1 className='text-end'>Rick and Morty</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto expedita ea autem doloribus natus eum dolores explicabo architecto nesciunt deleniti aliquid, voluptate quisquam eligendi consequuntur necessitatibus similique quibusdam. Maiores?</p>
          </div>
        </div>
      </div>

      <MiApi />
    </>
  )
}
