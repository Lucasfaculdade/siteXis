import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoX from '../assets/logoX.png';

export default function Menu() {
    const navigate = useNavigate();

    return (
        <div style={styles.homeWrapper}>
                <div style={styles.homeContainer}>
                    
                    <div style={styles.logoContainer}>
                        <img 
                            src={logoX} 
                            alt="Xis Gáucho - Logo" 
                            style={styles.logo}                        
                        />
                    </div>
                    

                    <div style={styles.textSide}>
                        <div style={styles.badge}>Tradicionalismo & Sabor</div>
                            <p style={styles.logoDesc}> 
                                Bah! O verdadeiro sabor do Rio Grande do Sul, com muito amor de tradição.
                                Direto do Sul para o coração de Brasília.
                            </p>
                
                        <div style={styles.btnArea}>
                            <button onClick={() => navigate('/menu')} style={styles.btnPrincipal}>
                                Veja nosso Cardápio Completo
                            </button>

                            <button onClick={() => navigate('/contato')} style={styles.btnSecundario}>
                                Peça pelo WhatsApp
                            </button>
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
        paddingBottom: '50px'
    },
    homeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1600px',
        width: '100%',
        gap: '40px',
        flexWrap: 'wrap',
    },
    logoContainer: {
        flex: 1.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    logo: { 
        width: '650px',
        maxWidth: '750px',
        height: 'auto',
        filter: 'drop-shadow(0px, 10px, 20px rgba(0, 0, 0, 0.4))',
        transition: '0.3s ease-in-out',
    },
    textSide: {
        flex: 1,
        textAlign: 'left',
        minWidth: '350px',
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
        gap: '15px',
        justifyContent: 'center',
    },
    btnPrincipal: {
        padding: '18px 30px',
        borderRadius: '50px',
        border: 'none',
        backgroundColor: '#fff',
        color: '#d12124',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: '0.3s',
    },
    btnSecundario: {
        padding: '18px 30px', 
        borderRadius: '50px',
        border: 'none',
        backgroundColor: '#3cff0098',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: '0.3s',
    },
};