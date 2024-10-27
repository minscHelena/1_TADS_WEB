const form = document.querySelector("form");



form.addEventListener("submit", (e) =>{

    e.preventDefault();
    let vet =[];

    vet[0] = Number (form.n1.value);
    vet[1] = Number (form.n2.value);
    vet[2] = Number (form.n3.value);
    vet[3] = Number (form.n4.value);
    vet[4] = Number (form.n5.value);
    vet[5] = Number (form.n6.value);
    vet[6] = Number (form.n7.value);
    vet[7] = Number (form.n8.value);
    vet[8] = Number (form.n9.value);
    vet[9] = Number (form.n10.value);
    
    for(let i = 0; i < vet.length; i++){
        if(vet[i]%2 == 0){
            document.write = vet[i];
        }
    }
    
});




