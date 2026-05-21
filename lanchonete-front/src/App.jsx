import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useRef }  from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contato from './pages/Contato.jsx';
import './App.css'

function App() {

  const menuRef = useRef(null);
  const contatoRef = useRef(null);

  const [ isModalOpen, setIsModalOpen ] = React.useState(false);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContato = () => {
    contatoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  return (
    <Router>
      <div style={styles.appContainer}>
        <nav className="navbar" style={styles.navbar}>
          <Link to="/" className="navbar-brand" style={styles.brand} onClick={scrollToTop}>
            <span style={{ color: '#37af00' }} >X</span>
            <span style={{ color: '#FFCC00' }} >I</span>
            <span style={{ color: '#d12124' }} >S</span>
            <span style={{ marginLeft: '8px', color: '#fff' }}>Gaúcho</span> 
          </Link>

          <div className="navbar-links" style={styles.links}>
            <button onClick={() => setIsModalOpen(true)} style={styles.btnPdf}>
              Veja o nosso Cardápio
            </button>

            <span style={styles.link} onClick={scrollToContato}>Fale Conosco</span>
          </div>
        </nav>

        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={
              <>
              <Home onVerCardapio={scrollToMenu}/>
              <div style={{ height: '5vh' }}></div>
              <div ref={menuRef} style={{ paddingTop: '25px', marginBottom: '25px' }}>
                <Menu />
              </div>

              <div style={{ height: '15vh' }}></div>

              <div ref={contatoRef} style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <Contato/>
              </div>
              </>
            }/>
            
          </Routes>
        </main>

        {
          isModalOpen && (
            <div style={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
              <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div style={styles.modalHeader}> 
                  <h3 style={styles.modalHeader}>Cardápio</h3>
                  <button style={styles.closeBtn} onClick={() => setIsModalOpen(false)}>X</button>
                </div>

                <iframe 
                  src="/cardapio-xis.pdf" 
                  title="Cardápio PDF"
                  style={styles.pdfViewer}
                  ></iframe>
              </div>
            </div>
          )}
      </div>
    </Router>
  );
}

const styles = {
  appContainer:{
    display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw',
    background: 'linear-gradient(135deg, #006b3f 0%, #ffcc00 50%, #d12124 100%)',
    backgroundAttachment: 'fixed', overflowX: 'hidden' 
  },
  navbar:{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(5px)', position: 'sticky',
    top: 0, zIndex: 100  
  },
  brand:{
    fontSize: '2.5rem', fontWeight: '900', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center'
  },
  links:{
    display: 'flex', gap: '25px', alignItems: 'center'
  },
  link:{
    color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem',
    cursor: 'pointer', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)'
  },
  btnPdf:{
    backgroundColor: '#ffcc00', color: '#000', padding: '10px 20px', borderRadius: '8px',
    border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem', 
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', transition: '0.3s'
  },
  mainContent:{
    flex: 1, width: '100%', padding: '0 5%'
  },
  modalOverlay:{
    position: 'fixed', top:0, left: 0, width: '100vw', height: '100vh', 
    backgroundColor: 'rgba(0, 0, 0, 0.85)', display: 'flex', justifyContent: 'center',
    alignItems: 'center', zIndex: 1000  
  },
  modalContent:{
    width: '85%', height: '90%', backgroundColor: '#fff', borderRadius: '20px',
    display: 'flex', flexDirection: 'column', overFlow: 'hidden', position: 'relative',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
  },
  modalHeader:{
    padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#333', color: '#fff'
  },
  pdfViewer:{
    widht: '100%', flex: 1, border: 'none'  
  },
  closeBtn:{
    position: 'fixed', top: '15px', right: '25px', backgroundColor: 'transparent',
    color: '#333', border: 'none', cursor: 'pointer', fontWeight: 'bold', 
    fontSize: '2rem', zIndex: 1010, disyplay: 'flex', alignItems: 'center',
    justifyContent: 'center', textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)'
  }
};

export default App;
