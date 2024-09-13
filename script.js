let country_list = {
    "AED": {name: "Emirados Árabes Unidos", code: "AE"},
    "AFN": {name: "Afeganistão", code: "AF"},
    "XCD": {name: "Antígua e Barbuda", code: "AG"},
    "ALL": {name: "Albânia", code: "AL"},
    "AMD": {name: "Armênia", code: "AM"},
    "ANG": {name: "Antilhas Holandesas", code: "AN"},
    "AOA": {name: "Angola", code: "AO"},
    "ARS": {name: "Argentina", code: "AR"},
    "AUD": {name: "Austrália", code: "AU"},
    "AZN": {name: "Azerbaijão", code: "AZ"},
    "BAM": {name: "Bósnia e Herzegovina", code: "BA"},
    "BBD": {name: "Barbados", code: "BB"},
    "BDT": {name: "Bangladesh", code: "BD"},
    "XOF": {name: "Benin", code: "BJ"},
    "BGN": {name: "Bulgária", code: "BG"},
    "BHD": {name: "Bahrein", code: "BH"},
    "BIF": {name: "Burundi", code: "BI"},
    "BMD": {name: "Bermudas", code: "BM"},
    "BND": {name: "Brunei", code: "BN"},
    "BOB": {name: "Bolívia", code: "BO"},
    "BRL": {name: "Brasil", code: "BR"},
    "BSD": {name: "Bahamas", code: "BS"},
    "NOK": {name: "Noruega", code: "NO"},
    "BWP": {name: "Botsuana", code: "BW"},
    "BYR": {name: "Bielorrússia", code: "BY"},
    "BZD": {name: "Belize", code: "BZ"},
    "CAD": {name: "Canadá", code: "CA"},
    "CDF": {name: "República Democrática do Congo", code: "CD"},
    "XAF": {name: "República Centro-Africana", code: "CF"},
    "CHF": {name: "Suíça", code: "CH"},
    "CLP": {name: "Chile", code: "CL"},
    "CNY": {name: "China", code: "CN"},
    "COP": {name: "Colômbia", code: "CO"},
    "CRC": {name: "Costa Rica", code: "CR"},
    "CUP": {name: "Cuba", code: "CU"},
    "CVE": {name: "Cabo Verde", code: "CV"},
    "CZK": {name: "República Tcheca", code: "CZ"},
    "DJF": {name: "Djibuti", code: "DJ"},
    "DKK": {name: "Dinamarca", code: "DK"},
    "DOP": {name: "República Dominicana", code: "DO"},
    "DZD": {name: "Argélia", code: "DZ"},
    "EGP": {name: "Egito", code: "EG"},
    "ETB": {name: "Etiópia", code: "ET"},
    "EUR": {name: "União Europeia", code: "EU"},
    "FJD": {name: "Fiji", code: "FJ"},
    "FKP": {name: "Ilhas Falkland", code: "FK"},
    "GBP": {name: "Reino Unido", code: "GB"},
    "GEL": {name: "Geórgia", code: "GE"},
    "GGP": {name: "Guernsey", code: "GG"},
    "GHS": {name: "Gana", code: "GH"},
    "GIP": {name: "Gibraltar", code: "GI"},
    "GMD": {name: "Gâmbia", code: "GM"},
    "GNF": {name: "Guiné", code: "GN"},
    "GTQ": {name: "Guatemala", code: "GT"},
    "GYD": {name: "Guiana", code: "GY"},
    "HKD": {name: "Hong Kong", code: "HK"},
    "HNL": {name: "Honduras", code: "HN"},
    "HRK": {name: "Croácia", code: "HR"},
    "HTG": {name: "Haiti", code: "HT"},
    "HUF": {name: "Hungria", code: "HU"},
    "IDR": {name: "Indonésia", code: "ID"},
    "ILS": {name: "Israel", code: "IL"},
    "INR": {name: "Índia", code: "IN"},
    "IQD": {name: "Iraque", code: "IQ"},
    "IRR": {name: "Irã", code: "IR"},
    "ISK": {name: "Islândia", code: "IS"},
    "JMD": {name: "Jamaica", code: "JM"},
    "JOD": {name: "Jordânia", code: "JO"},
    "JPY": {name: "Japão", code: "JP"},
    "KES": {name: "Quênia", code: "KE"},
    "KGS": {name: "Quirguistão", code: "KG"},
    "KHR": {name: "Camboja", code: "KH"},
    "KMF": {name: "Comores", code: "KM"},
    "KPW": {name: "Coreia do Norte", code: "KP"},
    "KRW": {name: "Coreia do Sul", code: "KR"},
    "KWD": {name: "Kuwait", code: "KW"},
    "KYD": {name: "Ilhas Cayman", code: "KY"},
    "KZT": {name: "Cazaquistão", code: "KZ"},
    "LAK": {name: "Laos", code: "LA"},
    "LBP": {name: "Líbano", code: "LB"},
    "LKR": {name: "Sri Lanka", code: "LK"},
    "LRD": {name: "Libéria", code: "LR"},
    "LSL": {name: "Lesoto", code: "LS"},
    "LTL": {name: "Lituânia", code: "LT"},
    "LVL": {name: "Letônia", code: "LV"},
    "LYD": {name: "Líbia", code: "LY"},
    "MAD": {name: "Marrocos", code: "MA"},
    "MDL": {name: "Moldávia", code: "MD"},
    "MGA": {name: "Madagáscar", code: "MG"},
    "MKD": {name: "Macedônia do Norte", code: "MK"},
    "MMK": {name: "Mianmar", code: "MM"},
    "MNT": {name: "Mongólia", code: "MN"},
    "MOP": {name: "Macau", code: "MO"},
    "MRO": {name: "Mauritânia", code: "MR"},
    "MUR": {name: "Maurício", code: "MU"},
    "MVR": {name: "Maldivas", code: "MV"},
    "MWK": {name: "Malawi", code: "MW"},
    "MXN": {name: "México", code: "MX"},
    "MYR": {name: "Malásia", code: "MY"},
    "MZN": {name: "Moçambique", code: "MZ"},
    "NAD": {name: "Namíbia", code: "NA"},
    "XPF": {name: "Nova Caledônia", code: "NC"},
    "NGN": {name: "Nigéria", code: "NG"},
    "NIO": {name: "Nicarágua", code: "NI"},
    "NPR": {name: "Nepal", code: "NP"},
    "NZD": {name: "Nova Zelândia", code: "NZ"},
    "OMR": {name: "Omã", code: "OM"},
    "PAB": {name: "Panamá", code: "PA"},
    "PEN": {name: "Peru", code: "PE"},
    "PGK": {name: "Papua-Nova Guiné", code: "PG"},
    "PHP": {name: "Filipinas", code: "PH"},
    "PKR": {name: "Paquistão", code: "PK"},
    "PLN": {name: "Polônia", code: "PL"},
    "PYG": {name: "Paraguai", code: "PY"},
    "QAR": {name: "Catar", code: "QA"},
    "RON": {name: "Romênia", code: "RO"},
    "RSD": {name: "Sérvia", code: "RS"},
    "RUB": {name: "Rússia", code: "RU"},
    "RWF": {name: "Ruanda", code: "RW"},
    "SAR": {name: "Arábia Saudita", code: "SA"},
    "SBD": {name: "Ilhas Salomão", code: "SB"},
    "SCR": {name: "Seicheles", code: "SC"},
    "SDG": {name: "Sudão", code: "SD"},
    "SEK": {name: "Suécia", code: "SE"},
    "SGD": {name: "Cingapura", code: "SG"},
    "SLL": {name: "Serra Leoa", code: "SL"},
    "SOS": {name: "Somália", code: "SO"},
    "SRD": {name: "Suriname", code: "SR"},
    "STD": {name: "São Tomé e Príncipe", code: "ST"},
    "SVC": {name: "El Salvador", code: "SV"},
    "SYP": {name: "Síria", code: "SY"},
    "SZL": {name: "Essuatíni", code: "SZ"},
    "THB": {name: "Tailândia", code: "TH"},
    "TJS": {name: "Tadjiquistão", code: "TJ"},
    "TMT": {name: "Turcomenistão", code: "TM"},
    "TND": {name: "Tunísia", code: "TN"},
    "TOP": {name: "Tonga", code: "TO"},
    "TRY": {name: "Turquia", code: "TR"},
    "TTD": {name: "Trinidad e Tobago", code: "TT"},
    "TWD": {name: "Taiwan", code: "TW"},
    "TZS": {name: "Tanzânia", code: "TZ"},
    "UAH": {name: "Ucrânia", code: "UA"},
    "UGX": {name: "Uganda", code: "UG"},
    "USD": {name: "Estados Unidos", code: "US"},
    "UYU": {name: "Uruguai", code: "UY"},
    "UZS": {name: "Uzbequistão", code: "UZ"},
    "VEF": {name: "Venezuela", code: "VE"},
    "VND": {name: "Vietnã", code: "VN"},
    "VUV": {name: "Vanuatu", code: "VU"},
    "YER": {name: "Iêmen", code: "YE"},
    "ZAR": {name: "África do Sul", code: "ZA"},
    "ZMK": {name: "Zâmbia", code: "ZM"},
    "ZWD": {name: "Zimbábue", code: "ZW"}
};

let opcoes = document.querySelectorAll(".opcao");
let select = document.querySelector("#select-pais");
let select2 = document.querySelector("#select-ps");
let img = document.querySelector("#imagem1");
let img2 = document.querySelector("#imagem2");
let botaoTrocar = document.querySelector(".botton-swap");
let botaoConversao = document.querySelector(".button");
let moedaDe = null;


select.addEventListener("change", ()=> {
    img.src = `https://flagsapi.com/${select.value}/flat/64.png`;
    //for (let i = 0; i<country_list)
});
select2.addEventListener("change", ()=> {
    img2.src = `https://flagsapi.com/${select2.value}/flat/64.png`;
});



botaoTrocar.addEventListener("click", ()=>{
    let selectTemp = select.value;
    select.value = select2.value;
    select2.value = selectTemp;
    let imgTemp = img.src;
    img.src = img2.src;
    img2.src = imgTemp;
})


async function taxaConversao (moedaDe, moedaPara) {
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











//desafio: fazer com que, com base na sigla do pais que está escolhido, eu obtenha o codigo de moeda dele
//para isso acho que tenho que criar um grande objeto












