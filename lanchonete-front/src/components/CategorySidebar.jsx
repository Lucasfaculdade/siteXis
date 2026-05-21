

export default function CategorySidebar({ categorias, ativa, setAtiva }){
    return(
        <aside className="menu-sidebar" style={styles.sidebar}>
            <h3 style={{ marginBottom: '15px' }}>Cardápio</h3>
            {categorias.map(cat => (
                <button key={cat} onClick={() => setAtiva(cat)}
                    style={{ ...styles.tab, 
                    background: ativa === cat ? '#e67e22' : 'transparent', 
                    color: ativa === cat ? '#fff' : '#333'
                    }}
                >
                {cat}
                </button>
            ))}
        </aside>
    );
}

const styles = {
    sidebar: { width: '220px', display: 'flex', flexDirection: 'column', gap: '8px' },
    tab: { padding: '12px', border: '1px solid #ddd', 
        borderRadius: '8px', cursor: 'pointer', textAlign: 'left', 
        fontWeight: '500', transition: '0.3s' },
};