let itens=[]

const carregarDivItem = (cs, id, cabe, obj) => {
    const div = document.getElementById(id)
    const cabecalho = cabe.map(item => `<th> ${item}</th>` ).join("") 
    const itensHtml = cs.map( item => `<tr>`+ obj.map(objet=> `<td>${item[objet]}</td>`).join("")+`</tr>` ) 
    div.innerHTML = `<table class="table table-hover table-danger"><tr>${cabecalho}</tr> ${itensHtml.join("\n")}</table>`
}

async function carregarItens(link="https://random-data-api.com/api/v2/beers?size=3", cab=["Nome", "Alcool", "Amargor", "Estilo"], obj=["name", "alcohol", "ibu", "style"], id="cervejasDiv"){
    try{
        let res = await fetch(link)
        itens = await res.json() 
        carregarDivItem(itens,id, cab, obj)
    }catch(err){
        document.getElementById(id).innerHTML = "Fudeu..."
    }
}