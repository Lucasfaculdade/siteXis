import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Contato() {
    const [formData, setFormData] = useState({ nome: '', messagem: '' }); 

    const telefone = "5561981857189";
    const mensagemPadrao = encodeURIComponent("Olá, vim pelo site e gostaria de fazer um pedido!");
    const linkWhatsApp = `https://wa.me/${telefone}?text=${mensagemPadrao}`;

    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.8288094402365!2d-47.883062188811635!3d-15.76019288481228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3bca9b16f4ef%3A0x4e4726955880d718!2sXis%20Ga%C3%BAcho%20-%20Asa%20Norte!5e0!3m2!1spt-BR!2sbr!4v1777399898891!5m2!1spt-BR!2sbr";
    
    return(
        <div style={styles.container}>
            <div style={styles.glassCard}>

                <div style={styles.topSection}>

                    <div style={styles.logoSide}>
                        <img src={logo} alt="Logo Xis Gaúcho" style={styles.logo}/>
                    </div> 

                    <div style={styles.textSide}>
                        <h1 style={styles.titulo}>Fale Conosco</h1>
                        <p style={styles.subtitulo}>Estamos aberto de segunda a domingo!</p>

                        <div style={styles.infoGroup}>
                            <p><strong>Endereço:</strong> Asa Norte - Brasília - DF</p>
                            <p><strong>Horário:</strong> Segunda a Domingo: 17:30 às 23:00</p>
                        </div>

                        <a href={linkWhatsApp} target="_blank" rel="noreferrer" style={styles.btnWhatsApp}>
                            Chamar no WhatsApp
                        </a>
                    </div>
                </div>
                
                <div style={styles.mapSection}>
                    <iframe
                        src={mapUrl}
                        style={styles.iframe}
                        allowFullScreen=""
                        loading="lazy"
                        title="Localização"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}

const styles = {
    container:{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 0'
    },
    glassCard:{
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(10px)',
        borderRadius: '40px',
        padding: '40px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
    },
    topSection:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px'
    },
    logoSide:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        minWidth: '250px'
    },
    logo:{
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        filter: 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3))'
    },
    textSide:{
        flex: 1.5,
        color: '#fff',
        minWidth: '300px',
        textAlign: 'left'
    },
    titulo:{
        fontSize: '3rem', fontWeight: '900', margin: '0, 0, 10px 0'
    },
    subtitulo:{
        fontSize: '1.2rem', color: '#ffcc00', marginBottom: '25px'
    },
    infoGroup:{
        marginBottom: '30px',
        lineHeight: '1.6',
        fontSize: '1.1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    btnWhatsApp:{
        display: 'inline-block', backgroundColor: '#25D366', color: '#fff', 
        textDecoration: 'none', padding: '15px 30px', borderRadius: '50px', fontWeight: 'bold',
        fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
    },
    mapSection:{
        width: '100%',
        height: '400px',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '4px solid rgba(255, 255, 255, 0.1)'
    },
    iframe:{
        width: '100%',
        height: '100%',
        border: 'none'
    }
};