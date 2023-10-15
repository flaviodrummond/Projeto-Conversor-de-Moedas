let convertButton = document.querySelector(".convert-button") // Mapeado o botão

function convertValues(){ // Criando uma função que toda vez que eu clicar no botão, converta os valores.
    const inputCurrencyValue = document.querySelector(".input-values").value // Criando uma variavel para pegar o valor dentro do input

    const valueToConvert = document.querySelector(".currencyValuetoCovert") // Valor para converter

    const valueConverted = document.querySelector(".currencyValue") // Valor a ser convertido

    const dolarToday = 5.08 // Cotação do dolar

    const converteValue = inputCurrencyValue / dolarToday // Pegando o valor digitado no input e dividindo pela cotação do dolar

    valueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

    valueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style:"currency",
        currency:"USD"
    }).format(converteValue)


}

convertButton.addEventListener("click", convertValues) // Pegando o click do nosso botão
