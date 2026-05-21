import React from 'react';
import logoX from  '../assets/logoX.png';

export default function ProductCard({ item }){

    const valorPreco = item.preco ? Number(item.preco) : 0;
    
    return(
        <div className="product-card" style={styles.card}>
            <div className="product-card-img-container" style={styles.imageContainer}>
                <img src={item.imagem || logoX} alt={item.nome} style={styles.img} />
            </div>
            <div className="product-card-info" style={styles.infoContainer}>
                <h4 style={styles.nome}>{item.nome}</h4>
                {item.desc && <p style={styles.desc}>{item.desc}</p>}
                <span style={styles.preco}>
                    R$ {valorPreco.toFixed(2).replace('.', ',')}
                </span>
            </div>
        </div>
        
    );
}

const styles = {
    card: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
        borderRadius: '16px', padding: '20px', border: '1px solid #eee', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        width: '100%', boxSizing: 'border-box'
    },
    imageContainer: {
        width: '110px', height: '110px', minWidth: '110px', borderRadius: '12px', overflow: 'hidden',
        backgroundColor: '#f9f9f9', marginRight: '20px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', border: '1px solid #f0f0f0'
    },
    img: {
        width: '100%', height: '100%', objectFit: 'contain',
    },
    nome: {
        fontSize: '20px', color: '#333', margin: '0', fontWeight: '700' 
    },
    desc: { 
        fontSize: '14px', color: '#777', margin: '0', lineHeight: '1.4' 
    },
    preco: { 
        fontWeight: 'bold', color: '#e67e22', fontSize: '18px', marginTop: '5px'
    },
    
};