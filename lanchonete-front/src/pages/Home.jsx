import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoX from '../assets/logoX.png';

export default function Menu({ onVerCardapio }) {
    const navigate = useNavigate();

    const telefone = "5561981857189";
    const mensagemPadrao = encodeURIComponent("Olá, vim pelo site e gostaria de fazer um pedido!");
    const linkWhatsApp = `https://wa.me/${telefone}?text=${mensagemPadrao}`;

    return (
        <div style={styles.homeWrapper}>
                <div className="home-container" style={styles.homeContainer}>
                    <div style={styles.logoContainer}>
                        <img src={logoX} alt="Xis Gáucho - Logo" style={styles.logo}  />
                    </div>
                    

                    <div className="home-text-side" style={styles.textSide}>
                        <div style={styles.badge}>Tradicionalismo & Sabor</div>
                            <p style={styles.logoDesc}> 
                                Bah! O verdadeiro sabor do Rio Grande do Sul, com muito amor de tradição.
                                Direto do Sul para o coração de Brasília.
                            </p>
                
                        <div style={styles.btnArea}>
                            <button onClick={onVerCardapio} style={styles.btnPrincipal}>
                                Ver cardápio na íntegra 
                            </button>

                            <a href={linkWhatsApp} target="_blank" rel="noreferrer" style={styles.btnSecundario}>
                                Peça pelo WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

const styles = {
    homeWrapper: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px'
    },
    homeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        width: '100%',
        gap: '20px',
        flexWrap: 'wrap',
    },
    logoContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '280px'
    },
    logo: { 
        width: '80%',
        maxWidth: '450px',
        height: 'auto',
        filter: 'drop-shadow(0px, 10px, 20px rgba(0, 0, 0, 0.4))',
        transition: '0.3s ease-in-out',
    },
    textSide: {
        flex: 1,
        textAlign: 'left',
        width: '500px',
        minWidth: '280px',
        padding: '30px',   
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '30px',
        backdropFilter: 'blur(15px)',
    },
    badge: {
        backgroundColor: '#ffcc00',
        color: '#000',
        display: 'inline-block',
        padding: '6px 20px',
        borderRadius: '50px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        marginBottom: '15px',
    },
    logoDesc: {
        fontSize: '1.3rem',
        color: '#fff',
        lineHeight: '1.4',
        marginBottom: '40px',
        fontWeight: '500',
    },
    btnArea: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    btnPrincipal: {
        padding: '12px 20px',
        borderRadius: '50px',
        border: 'none',
        backgroundColor: '#fff',
        color: '#d12124',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: '0.3s',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    },
    btnSecundario: {
        padding: '12px 20px', 
        borderRadius: '50px',
        border: 'none',
        backgroundColor: '#25D366',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        transition: '0.3s',
        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
    },
};