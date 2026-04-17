import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contato from './pages/Contato.jsx';
import './App.css'

function App() {
 
  return (
    <Router>
      <div style={styles.appContainer}>
        <nav style={styles.navbar}>
          <div style={styles.brand}>
            Xis Gaúcho - Asa Norte
          </div>
          <div style={styles.links}>
            <Link to="/" style={styles.link}>Principal</Link>
            <Link to="/menu" style={styles.link}>Menu</Link>
            <Link to="/contato" style={styles.link}>Fale Conosco</Link>
          </div>
        </nav>

        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/contato" element={<Contato />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: 'flex', flexDirection: 'column', 
    minHeight: '100vh', width: '100vw',
    background: 'linear-gradient(135deg, #006b3f 0%, #ffcc00 50%, #d12124 100%)',
    backgroundAttachment: 'fixed',
  },
  navbar: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '30px 5%', backgroundColor: 'transparent',
  },
  brand: { 
    fontSize: '2rem', fontWeight: '900', color: '#fff', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', letterSpacing: '-1px' 
  },
  links: { display: 'flex', gap: '25px' },
  link: { 
    color: '#fff', textDecoration: 'none', fontWeight: 'bold', 
    fontSize: '1.1rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'  
  },
  mainContent: {
    flex: 1, width: '100%', padding: '0 5%',
    display: 'flex', flexDirection: 'column',
  }
};

export default App;
