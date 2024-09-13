
let opcoes = document.querySelectorAll(".opcao");
let select = document.querySelector("#select-pais");
let select2 = document.querySelector("#select-ps");
let img = document.querySelector("#imagem1");

let img2 = document.querySelector("#imagem2");

let botaoTrocar = document.querySelector(".botton-swap");
let botaoConversao = document.querySelector(".button");
let moedaDe = pegarCodigoDaMoeda(select.value);
let moedaPara = pegarCodigoDaMoeda(select.value);
taxaConversão = null;


select.addEventListener("change", ()=> {
    img.src = `https://flagsapi.com/${select.value}/flat/64.png`;
    moedaDe = pegarCodigoDaMoeda(select.value);
    taxaConversao = pegarTaxaConversao(moedaDe, moedaPara)

    


});
select2.addEventListener("change", ()=> {
    img2.src = `https://flagsapi.com/${select2.value}/flat/64.png`;
    moedaPara = pegarCodigoDaMoeda(select.value);


});



botaoTrocar.addEventListener("click", ()=>{
    let selectTemp = select.value;
    select.value = select2.value;
    select2.value = selectTemp;
    let imgTemp = img.src;
    img.src = img2.src;
    img2.src = imgTemp;
})


async function pegarTaxaConversao (moedaDe, moedaPara) {
    let moedasRequest = moedaDe+"-"+moedaPara;
    let url = "https://economia.awesomeapi.com.br/last/"+moedasRequest;
    console.log(url);
    let moedasJson = moedaDe+moedaPara;
    console.log(moedasJson);
    const request = new Request(url) ;
    let taxaConversao;
    const result = await fetch(request)
    dados = await result.json()
    taxaConversao = dados[moedasJson].ask;
    

    return taxaConversao;
}





for (let i = 0; i<country_code.length; i++){
    console.log(country_code[i].value);
}


function pegarCodigoDaMoeda(SiglaPais){
    for (let i = 0; i<country_code.length; i++){
        if(country_code[i].value === SiglaPais){
            return country_code[i].value;
        }

    }
    return undefined;

}



console.log(pegarTaxaConversao("USD", "BR"));



//desafio: fazer com que, com base na sigla do pais que está escolhido, eu obtenha o codigo de moeda dele
//para isso acho que tenho que criar um grande objeto












