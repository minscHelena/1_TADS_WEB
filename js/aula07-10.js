
const frm = document.querySelector("form"); //basicamente a mesma coisa que o getElement
const resp = document.querySelector("h3");
const resp2 = document.querySelector("h2")

/*console.log(frm);

frm.addEventListener("submit", (e) => { //=> arrow function - diz que é uma função
    e.preventDefault(); //evita o envio do fomulário
    const nome = frm.inNome.value;

    resp.innerText = `Olá ${nome}, seja bem-vindo`; //

    console.log(nome);
})*/

    

frm.addEventListener("submit", (e) =>{

    e.preventDefault();

    const nome = frm.inNome.value;

    let n1 = Number (frm.inNota1.value);
    let n2 = Number (frm.inNota2.value);
    let n3 = Number (frm.inNota3.value);
    let n4 = Number (frm.inNota4.value);

    let media = (n1 + n2 + n3 + n4)/4;


   
    if (media >= 70) {
        resp2.innerText = `A média do aluno ${nome} é: ${media}. Está APROVADO!`;
        resp2.style.color = "green";
    }else if(media <= 60 && media >= 4){
        resp2.innerText = `A média do aluno ${nome} é: ${media}. Está em RECUPERAÇÃO`;
        resp2.style.color = "blue";
    }else if(media <3){
        resp2.innerText = `A média do aluno ${nome} é: ${media}. Está REPROVADO`;
        resp2.style.color = "red";
    }
    console.log(media);
})


