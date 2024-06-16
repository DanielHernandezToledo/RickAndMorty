import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MiApi from './components/MiApi';
import './App.css';

export default function App() {

  return (
    <>
      <Navbar bg="black" data-bs-theme="dark" style={{ maxHeight: 60 + 'px' }}>
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="#home"><img src="\icons\Rick-and-Morty.png" alt="Rick and Morty logo" style={{ width: 120 + 'px' }} /></Navbar.Brand>s
          </Nav>
          <Nav>
            <Nav.Link href='https://github.com/DanielHernandezToledo/RickAndMorty'>Github</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="bgimg">
        <div className="overlay">
          <div className="container d-flex flex-column align-items-end justify-content-end">
          <h1 className='text-end fw-bold'>Rick and Morty</h1>
          <p className='h3'>Find your favorite characters</p>
          </div>
        </div>
      </div>

      <MiApi
        className='bgAll'
      />
    </>
  )
}
