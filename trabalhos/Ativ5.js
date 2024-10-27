const form = document.querySelector("form");

form.addEventListener("submit", (e) =>{
e.preventDefault();
    let vet =[];
    let media;

    vet[0] = Number (form.nota1.value);
    vet[1] = Number (form.nota2.value);
    vet[2] = Number (form.nota3.value);
    vet[3] = Number (form.nota4.value);
    vet[4] = Number (form.nota5.value);


    for(let i = 0; i < vet.length; i++){
        sum += vet[i];
    }
    media = sum/5;

    if (media >= 7) {
        document.write(`Aprovado ${media}`);
    } else {
        document.write(`Reprovado ${media}`);
    }
})