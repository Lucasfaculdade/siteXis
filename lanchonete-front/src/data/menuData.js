import refriL from '../assets/refriL.png';
import refri15 from '../assets/refri15L.png';
import refri600 from '../assets/refri600.png';
import aguas from '../assets/aguas.png';
import sucoDel from '../assets/sucoDel.png';
import sucoP from '../assets/sucoP.png';
import cha from '../assets/cha.png';
import batata from '../assets/batata.png';
import maionese from '../assets/maionese.png';
import maioneseTemp from '../assets/maioneseTemp.png';
import salada from '../assets/salada.png';
import bacon from '../assets/bacon.png';
import frango from '../assets/frango.png';
import amoda from '../assets/amoda.png';
import acebolado from '../assets/acebolado.png';
import coracao from '../assets/coracao.png';
import dog from '../assets/dog.png';
import vege from '../assets/vege.png';
import calabresa from '../assets/calabresa.png';
import combo from '../assets/combo.png';



export const menuData = [
    { 
        id: 1, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Salada', 
        preco: 58.20, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Hamburguer' ,
        imagem: salada
    },
    { 
        id: 2, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Bacon', 
        preco: 74.50, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Hamburguer e Bacon em cubos',
        imagem: bacon
    },
    { 
        id: 3, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis à moda da casa', 
        preco: 66.50, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Coxão mole em tiras' ,
        imagem: amoda
    },
    { 
        id: 4, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis à moda da casa acebolado', 
        preco: 67.50, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Coxão mole em tiras com cebolas refogadas',
        imagem: acebolado
    },
    { 
        id: 5, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis à moda da casa e bacon', 
        preco: 74.60, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Coxão mole em tiras com bacon em cubos' 
    },
    { 
        id: 6, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Filé Mignon', 
        preco: 82.40, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Filé Mignon em tiras' 
    },
    { 
        id: 7, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Filé Mignon e bacon', 
        preco: 91.80, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Filé Mignon em tiras com bacon em cubos' 
    },
    { 
        id: 8, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Picanha', 
        preco: 83.60, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Picanha em tiras' 
    },
    { 
        id: 9, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Filé de Frango', 
        preco: 58.50, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Filé de frango em tiras',
        imagem: frango
    },
    { 
        id: 10, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Filé de Frango e Bacon', 
        preco: 67.20, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Filé de frango em tiras com bacon' 
    },
    { 
        id: 11, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Coração', 
        preco: 67.30, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Coração de frango',
        imagem: coracao

    },
    { 
        id: 12, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Coração e Bacon', 
        preco: 75.80, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Coração de frango e bacon' 
    },
    { 
        id: 13, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Calabresa', 
        preco: 56.40, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Fatias de calabresa',
        imagem: calabresa
    },
    { 
        id: 14, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Hamburguer e Calabresa', 
        preco: 66.10, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Hamburguer e Fatias de calabresa' 
    },
    { 
        id: 15, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Dog', 
        preco: 46.50, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Hamburguer e Salsicha',
        imagem: dog
    },
    { 
        id: 16, 
        categoria: 'Tradicional', 
        nome: 'Trad. Xis Vegetariano', 
        preco: 44.60, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, e Queijo',
        imagem: vege
    },
    { 
        id: 17, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Salada', 
        preco: 46.00, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Hamburguer',
        imagem: salada
    },
    { 
        id: 18, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Bacon', 
        preco: 54.30, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Hamburguer e bacon',
        imagem: bacon
    },
    { 
        id: 19, 
        categoria: 'Capital', 
        nome: 'Cap. Xis À moda da casa', 
        preco: 50.60, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Carne de coxão mole',
        imagem: amoda
    },
    { 
        id: 20, 
        categoria: 'Capital', 
        nome: 'Cap. Xis À moda da casa acebolado', 
        preco: 54.20, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Carne de coxão mole com cebola',
        imagem: acebolado
    },
    { 
        id: 21, 
        categoria: 'Capital', 
        nome: 'Cap. Xis À moda da casa e bacon', 
        preco: 59.70, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Carne de coxão mole e bacon' 
    },
    { 
        id: 22, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Filé Mignon', 
        preco: 63.80, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Filé Mignon em tiras' 
    },
    { 
        id: 23, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Filé Mignon e bacon', 
        preco: 71.30, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Filé Mignon em tiras e bacon' 
    },
    { 
        id: 24, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Picanha', 
        preco: 64.90, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Picanha em tiras' 
    },
    { 
        id: 25, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Filé de Frango', 
        preco: 47.00, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Filé de Frango em tiras',
        imagem: frango
    },
    { 
        id: 26, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Filé de Frango e bacon', 
        preco: 58.50, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Filé de Frango em tiras e bacon' 
    },
    { 
        id: 27, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Coração', 
        preco: 51.70, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Coração',
        imagem: coracao
    },
    { 
        id: 29, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Coração e bacon', 
        preco: 58.50, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Coração e bacon' 
    },
    { 
        id: 30, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Calabresa', 
        preco: 42.30, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Fatias de Calabresa',
        imagem: calabresa
    },
    { 
        id: 31, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Hambúrguer e Calabresa', 
        preco: 50.60, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Hambúrguer e Fatias de Calabresa' 
    },
    { 
        id: 32, 
        categoria: 'Capital', 
        nome: 'Cap. Xis Vegetariano', 
        preco: 38.20, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, e Queijo',
        imagem: vege
    },
    { 
        id: 33, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Salada', 
        preco: 33.30, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Hamburguer'
    },
    { 
        id: 34, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Bacon', 
        preco: 37.90, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Hamburguer e bacon' 
    },
    { 
        id: 35, 
        categoria: 'Pox', 
        nome: 'Pox. Xis À moda da casa', 
        preco: 33.80, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Carne de coxão mole' 
    },
    { 
        id: 36, 
        categoria: 'Pox', 
        nome: 'Pox. Xis À moda da casa acebolado', 
        preco: 34.70, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Carne de coxão mole com cebola' 
    },
    { 
        id: 37, 
        categoria: 'Pox', 
        nome: 'Pox. Xis À moda da casa e bacon', 
        preco: 39.90, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Carne de coxão mole e bacon' 
    },
    { 
        id: 38, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Filé Mignon', 
        preco: 41.30, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Filé Mignon em tiras' 
    },
    { 
        id: 39, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Filé Mignon e bacon', 
        preco: 44.90, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Filé Mignon em tiras e bacon' 
    },
    { 
        id: 40, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Filé de Frango', 
        preco: 33.30, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Filé de Frango em tiras' 
    },
    { 
        id: 41, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Filé de Frango e bacon', 
        preco: 38.60, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Filé de Frango em tiras e bacon' 
    },
    { 
        id: 42, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Coração', 
        preco: 36.00, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Coração' 
    },
    { 
        id: 43, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Coração e bacon', 
        preco: 40.20, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo, Coração e bacon' 
    },
    { 
        id: 44, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Calabresa', 
        preco: 33.30, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Fatias de Calabresa' 
    },
    { 
        id: 45, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Dog', 
        preco: 33.10, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, Presunto, Queijo e Salsicha' 
    },
    { 
        id: 46, 
        categoria: 'Pox', 
        nome: 'Pox. Xis Vegetariano', 
        preco: 26.00, 
        desc: 'Maionese, Milho, Ervilha, Tomate, Alface, e Queijo' 
    },
    { 
        id: 47, 
        categoria: 'Bebidas', 
        nome: 'Latas de 310 ml', 
        preco: 9.00, 
        imagem: refriL
    },
    { 
        id: 48, 
        categoria: 'Bebidas', 
        nome: 'Garrafas de 600ml', 
        preco: 11.00, 
        imagem: refri600        
    },
    { 
        id: 49, 
        categoria: 'Bebidas', 
        nome: 'Garrafas 1.5L', 
        preco: 14.90,
        imagem: refri15
    },
    { 
        id: 50, 
        categoria: 'Bebidas', 
        nome: 'Suco Del Valle', 
        preco: 11.00, 
        desc: 'Lata',
        imagem: sucoDel
    },
    { 
        id: 51, 
        categoria: 'Bebidas', 
        nome: 'Suco de Polpa', 
        preco: 10.00, 
        desc: 'Garrafa 300ml',
        imagem: sucoP
    },
    { 
        id: 52, 
        categoria: 'Bebidas', 
        nome: 'Chás Matte', 
        preco: 8.00, 
        desc: 'Garrafa 310ml',
        imagem: cha
    },
    { 
        id: 53, 
        categoria: 'Bebidas', 
        nome: 'Água com/sem Gás', 
        preco: 7.50, 
        desc: 'Garrafa 310ml',
        imagem: aguas,
    },
    { 
        id: 54, 
        categoria: 'Acompanhamento', 
        nome: 'Batata Frita', 
        preco: 12.00, 
        desc: '150 gramas de Batata Frita Palito',
        imagem: batata
    },
    { 
        id: 55, 
        categoria: 'Acompanhamento', 
        nome: 'Maionese', 
        preco: 9.00, 
        desc: 'Maionese caseira',
        imagem: maionese
    },
    { 
        id: 56, 
        categoria: 'Acompanhamento', 
        nome: 'Maionese Temperada', 
        preco: 12.00, 
        desc: 'Maionese Temperada com Chimichurri',
        imagem: maioneseTemp
    },
    { 
        id: 57, 
        categoria: 'Acompanhamento', 
        nome: 'Combo', 
        preco: 17.90, 
        desc: 'Batata de 150g com Refri 220ml',
        imagem: combo
    }
];