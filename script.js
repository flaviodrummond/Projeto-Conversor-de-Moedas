let convertButton = document.querySelector(".convert-button") // Mapeado o botão

let currentySelect = document.querySelector(".convert-currency")

let selectedCurrency = document.querySelector(".converted-currency") // Mapeando o botão select para saber qual moeda converter

function convertValues() { // Criando uma função que toda vez que eu clicar no botão, converta os valores.
    const inputCurrencyValue = document.querySelector(".input-values").value // Criando uma variavel para pegar o valor dentro do input

    const valueToConvert = document.querySelector(".currencyValuetoCovert") // Valor para converter

    const valueConverted = document.querySelector(".currencyValue") // Valor a ser convertido

    const dolarToday = 5.08 // Cotação do dolar
    const euroToday = 5.31 // Cotação do Euro
    const libraToday = 6.12 // Cotação da Libra
    const bitcoinToday = 135633.37 // Cotação do Bitcoin



    // Quando clicar no meu botão, quero verificar o select, se o select estiver selecionado o valor dolar, ele entrará aqui.
    if (selectedCurrency.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday) // Pegando o valor digitado no input e dividindo pela cotação do dolar
    }

    // Quando clicar no meu botão, quero verificar o select, se o select estiver selecionado o valor euro, ele entrará aqui.
    if (selectedCurrency.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(selectedCurrency.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(selectedCurrency.value == "bitcoin") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if(selectedCurrency.value == "real") {
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

// Criando uma função, que toda vez que eu trocar de moeda, chame está função.
function changeCurrency(){

    const currecyName = document.querySelector("#currency-name")

    const currencyImagem = document.querySelector(".currency-imagen")    

    if (selectedCurrency.value == "dolar"){
        // Trocando o nome para dolar
        currecyName.innerHTML = "Dólar americano"
        // Trocando o a imagem para dollar
        currencyImagem.src = './assets/Dollar.png'
    }

    if (selectedCurrency.value == "euro"){
        // Trocando o nome para euro
        currecyName.innerHTML = "Euro"
        // Trocando o a imagem para euro
        currencyImagem.src = './assets/Euro.png'
    }

    if (selectedCurrency.value == "libra"){
        currecyName.innerHTML = "Libra Esterlina"
        currencyImagem.src = "./assets/libra.png"
    }

    if (selectedCurrency.value == "bitcoin"){
        currecyName.innerHTML = "Bitcoin"
        currencyImagem.src = './assets/bitcoin.png'
    }

    if (selectedCurrency.value == "real"){
        currecyName.innerHTML = "Real Brasileiro"
        currencyImagem.src = './assets/Real.png'
    }

    convertValues() // Chamando a função para converter os valores após a troca de moedas
}


    function changeCurrencyDe(){

        const currencyNameDe = document.querySelector("#currency-name-de")

        const currencyImagemDe = document.querySelector(".currency-imagen-de")
    

    if (currentySelect.value == "dolar"){
        // Trocando o nome para dolar
        currencyNameDe.innerHTML = "Dólar americano"
        // Trocando o a imagem para dollar
        currencyImagemDe.src = './assets/Dollar.png'
    }

    if (currentySelect.value == "euro"){
        currencyNameDe.innerHTML = "Euro"
        currencyImagemDe.src = './assets/Euro.png'
    }
    
    if (currentySelect.value == "libra"){
        currencyNameDe.innerHTML = "Libra Esterlina"
        currencyImagemDe.src = './assets/libra.png'
    }

    if (currentySelect.value == "bitcoin"){
        currencyNameDe.innerHTML = "Bitcoin"
        currencyImagemDe.src = './assets/bitcoin.png'
    }

    changeCurrencyDe()

    }
    

currentySelect.addEventListener("change", changeCurrencyDe )
selectedCurrency.addEventListener("change", changeCurrency) // Pegando o select e ficar atento sempre que ele trocar
convertButton.addEventListener("click", convertValues) // Pegando o click do nosso botão
