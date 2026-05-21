import React, {useState} from 'react';
import {menuData} from '../data/menuData';
import ProductCard from '../components/ProductCard';

export default function Menu(){
    const [ categoriaAtiva, setCategoriaAtiva ] = useState('Todos');
    const categorias = [ 
        'Todos', 'Tradicional', 'Capital', 'Pox', 'Bebidas','Acompanhamento' 
    ];
    const itensFiltrados = categoriaAtiva === 'Todos' 
    ? menuData : menuData.filter(item => item.categoria === categoriaAtiva);

    return(
        <div className="menu-wrapper" style={styles.menuWrapper}>
            
            <div className="category-header" style={styles.categoryHeader}>
                <h2 style={styles.menuTitle}>Cardápio</h2>
                <div className="category-list" style={styles.categoryList}>
                    {categorias.map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setCategoriaAtiva(cat)}
                            style={{
                                ...styles.categoryBtn,
                                backgroundColor: categoriaAtiva === cat ? '#ffcc00' : 'rgba(255, 255, 255, 0.1)',
                                color: categoriaAtiva === cat ? '#000' : '#fff',
                                border: categoriaAtiva === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.3)'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <main className="menu-grid" style={styles.menuGrid}>
                {itensFiltrados.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </main>
        </div>
    );
}

const styles = {
    menuWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        paddingBottom: '50px',
    },

    categoryHeader: {
        width: '100%',
        textAlign: 'center',
        padding: '20px 0',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
    },

    menuTitle:{
        color: '#fff',
        fontSize: '2.5rem',
        marginBottom: '20px',
        fontWeight: '900'
    },

    categoryList:{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        padding: '0 20px'
    },

    categoryBtn:{
        padding: '12px 25px',
        borderRadius: '50px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        transition: '0.3s',
        border: 'none'
    },

    menuGrid:{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '20px',
    }

};