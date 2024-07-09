import style from "./quadrado.module.css"

function gerarQuadrado() {

    const list = []
    for (let i = 0; i < 8; i++) {
        list.push(<div key={i} className={style.teste}>{i}</div>)
    }

    return list
}


function quantidadeColuna (num) {

    const listColuna = [];
    for(let i = 0; i < num; i++) {
        listColuna.push(<div className={style.boxComponent}>{gerarQuadrado()}</div>)
    }

    return listColuna
}


export default function Quadrado() {

    return (
        <>
        {quantidadeColuna(8)}
        </>
    )
}