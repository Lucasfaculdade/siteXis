import React, { useState } from 'react';

export default function Contato() {
    const [formData, setFormData] = useState({ nome: '', messagem: '' }); 

    const telefone = "5561999999999";
    const mensagemPadrao = encodeURIComponent("Olá, gostaria de fazer um pedido!");
    const linkWhatsApp = `https://wa.me/${telefone}?text=${mensagemPadrao}`;

    return(
        <div style={styles.container}>
            <section style={styles.card}>
                <h1 style={styles.titulo}>Fale Conosco</h1>
                <p style={styles.subtitulo}>
                    Para entrar em contato, envie uma mensagem para nosso WhatsApp:
                </p>

                <div style={styles.infoArea}>
                    <p><strong>Horário de Funcionamento:</strong></p>
                    <p>Segunda a Domingo: 17:30 às 23:00</p>
                </div>

                <a 
                href={linkWhatsApp}
                target="_blank"
                rel="nooperner noreferrer"
                style={styles.btnWhatsapp}
                >
                    Chamar no WhatsApp
                </a>

                <div style={styles.footerInfo}>
                    <p>Brasília - DF - CLN 408 BLOCO A LOJA 10</p>
                </div>
            </section>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        minHeight: '80vh', backgroundColor: '#fafafa', padding: '20px'
    },
    card: {
        backgroundColor: '#fff', padding: '40px', borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0, 0,  0, 0.05)', maxWidth: '450px',
        textAlign: 'center', border: '1px solid #eee'
    },
    iconArena: { fontSize: '50px', marginBottom: '20px' },
    titutlo: { fontSize: '28px', color: '#333', marginBottom: '10px' },
    subtitulo: { color: '#666', marginBottom: '30px', lineHeight: '1.5' },
    infoArea: { 
        backgroundColor: '#fff9f2', padding: '15px', borderRadiuz: '10px',
        marginBottom: '30px', fontSize: '14px', color: '#845c2e'
    },
    btnWhatsapp: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#25D366', color: '#fff', textDecoration: 'none',
        padding: '18px 30px', borderRadius: '50px', fontWeight: 'bold',
        fontSize: '18px', transition: 'transform 0.2s ease',
        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
    },
    footerInfo: { marginTop: '30px', fontSize: '13px', color: '#999', lineHeight: '1.8' }
};