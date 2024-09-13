

const country_code = [
    { value: "AR", label: "ARG" },
    { value: "BO", label: "BOL" },
    { value: "BR", label: "BRA" },
    { value: "CL", label: "CHL" },
    { value: "CO", label: "COL" },
    { value: "EC", label: "ECU" },
    { value: "GY", label: "GUY" },
    { value: "PY", label: "PRY" },
    { value: "PE", label: "PER" },
    { value: "SR", label: "SUR" },
    { value: "UY", label: "URY" },
    { value: "VE", label: "VEN" },
    { value: "US", label: "USA" },
    { value: "SV", label: "SLV" },
    { value: "PA", label: "PAN" },
    { value: "DE", label: "DEU" },
    { value: "FR", label: "FRA" },
    { value: "ES", label: "ESP" },
    { value: "IT", label: "ITA" },
    { value: "PT", label: "PRT" },
    { value: "IE", label: "IRL" },
    { value: "AT", label: "AUT" },
    { value: "GR", label: "GRC" },
    { value: "BE", label: "BEL" },
    { value: "FI", label: "FIN" },
    { value: "JP", label: "JPN" },
    { value: "GB", label: "GBR" },
    { value: "FK", label: "FLK" },
    { value: "GI", label: "GIB" },
    { value: "AU", label: "AUS" },
    { value: "KI", label: "KIR" },
    { value: "NR", label: "NRU" },
    { value: "CA", label: "CAN" },
    { value: "CH", label: "CHE" },
    { value: "LI", label: "LIE" },
    { value: "CN", label: "CHN" },
    { value: "NZ", label: "NZL" },
    { value: "CK", label: "COK" },
    { value: "NU", label: "NIU" },
    { value: "HK", label: "HKG" }
];





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
    const request = new Request(url) ;
    let taxaConversao;
    const result = await fetch(request)
    dados = await result.json()
    taxaConversao = dados[moedasJson].ask;
    taxaConversao

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



for (let i = 0; i<country_code.length; i++)
console.log(pegarCodigoDaMoeda("BR"));



//desafio: fazer com que, com base na sigla do pais que está escolhido, eu obtenha o codigo de moeda dele
//para isso acho que tenho que criar um grande objeto












