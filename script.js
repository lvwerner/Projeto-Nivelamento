document.getElementById("formDenuncia")
.addEventListener("submit", function(e){

e.preventDefault()

alert("Denúncia enviada!")

})
const modal = document.getElementById("modalColeta")
const abrir = document.getElementById("abrirColeta")
const fechar = document.querySelector(".fechar")

abrir.addEventListener("click", function(){
    modal.style.display = "flex"
})

fechar.addEventListener("click", function(){
    modal.style.display = "none"
})

window.addEventListener("click", function(e){
    if(e.target === modal){
        modal.style.display = "none"
    }
})

document.getElementById("formColeta")
.addEventListener("submit", function(e){

e.preventDefault()

let dados = {
nome:this[0].value,
endereco:this[1].value,
bairro:this[2].value,
telefone:this[3].value,
tipo:this[4].value,
descricao:this[5].value
}

let coletas = JSON.parse(localStorage.getItem("coletas")) || []

coletas.push(dados)

localStorage.setItem("coletas", JSON.stringify(coletas))

alert("Solicitação enviada!")

modal.style.display="none"

this.reset()

})

document.getElementById("formColeta")
.addEventListener("submit", function(e){

e.preventDefault()

let foto = document.getElementById("fotoMovel").files[0]

let dados = {
nome:this[0].value,
endereco:this[1].value,
bairro:this[2].value,
telefone:this[3].value,
tipo:this[4].value,
descricao:this[6].value,
foto: foto ? foto.name : "sem imagem"
}

let coletas = JSON.parse(localStorage.getItem("coletas")) || []

coletas.push(dados)

localStorage.setItem("coletas", JSON.stringify(coletas))

alert("Solicitação enviada!")

modal.style.display="none"

this.reset()

})
