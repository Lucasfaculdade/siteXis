
export default function ProductCard({ item }){

    const valorPreco = item.preco ? Number(item.preco) : 0;
    
    return(
        <div style={styles.card}>
            <div>Sanduiche</div>
            <div style={styles.cardInfo}>
                <h4 style={styles.nome}>{item.nome || "Sem Nome"}</h4>
                <p style={styles.desc}>{item.desc}</p>
                <span style={styles.preco} >
                    R$ {valorPreco.toFixed(2).replace('.', ',')}
                </span>
            </div>
        </div>
    );
}

const styles = {
    card: { border: '1px solid #eee', borderRadius: '12px', padding: '15px',
        display: 'flex', position: 'relative', background: '#fff' },
    imagePlaceholder: { width: '60px', height: '60px', background: '#f5f5f5',
    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginRight: '15px', fontSize: '24px'},
    nome: { fontSize: '18px', color: '#333', margin: '0 0 5px 0' },
    cardInfo: { flex: 1 },
    desc: { fontSize: '12px', color: '#666', margin: '5px 0' },
    preco: { fontWeight: 'bold', color: '#e67e22', fontSize: '16px'},
    
};