import style from "./quadrado.module.css";


function gerarQuadrado(row) {
    const list = [];
    for (let i = 0; i < 8; i++) {
        const isBlack = (row + i) % 2 === 0;
        const squareClass = isBlack ? style.blackSquare : style.whiteSquare;
        list.push(<div key={i} className={`${style.teste} ${squareClass}`}>{i}</div>);
        console.log(row)
    }
    return list;
}



function quantidadeColuna(num) {
    const listColuna = [];
    for (let i = 0; i < num; i++) {
        listColuna.push(<div key={i} className={style.boxComponent}>{gerarQuadrado(i)}</div>);
    }
    return listColuna;
}



export default function Quadrado() {
    
    return (
        <div className={style.containerflex}>
            {quantidadeColuna(8)}
        </div>
    );
}
