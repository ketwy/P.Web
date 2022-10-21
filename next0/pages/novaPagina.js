export default function Principal(){
    return (
        <div>
            <h1>Nova Página</h1>
            <MariaPrea titulo="A questão 3 ta dando certo"/>
        </div>
    )
}

export function MariaPrea({titulo}){
    return (
        <h2>{titulo}</h2>
    )
}