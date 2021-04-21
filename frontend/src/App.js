import './App.css';
import React from "react";
import Header from './component/Header';
import Footer from './component/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <h1 className="App">Welcome to Pro Shop !</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
