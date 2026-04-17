import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';

export default function Menu(){
    const [ categoriaAtiva, setCategoriaAtiva ] = useState('Todos');
    const categorias = [ 
        'Todos', 'Tradicional', 'Capital', 'Pox', 'Bebida', 'Acompanhamento' 
    ];
    const itensFiltrados = categoriaAtiva === 'Todos' 
    ? menuData : menuData.filter(item => item.categoria === categoriaAtiva);

    return(
        <div style={{ display: 'flex', gap: '30px', width: '100%' }}>
            <CategorySidebar 
                categorias={categorias} 
                ativa={categoriaAtiva} 
                setAtiva={setCategoriaAtiva} 
            />
                <div style={{ flex: 1 }}>
                    <h1 style={{ marginBottom: '30px' }}>Menu</h1>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}> 
                        {itensFiltrados.map(item => (
                            <ProductCard key={item.id} item={item}/>
                        ))}
                    </div>
                </div>      
        </div>
    );
}