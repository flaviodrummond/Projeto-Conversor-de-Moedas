// 1º  Mapeando o button
const convertButton = document.querySelector(".convert-button")

// 9º Mapeando meu select para saber quando ele for trocar de moeda
const convertedCurrencyTo = document.querySelector(".converted-currency-to")

const convertCurrencyFrom = document.querySelector(".convert-currency-from")

// Troca dos nomes e das bandeiras das moedas que iram trocar

function flagChangeFrom () {

    const currencyNameFrom = document.getElementById("currencyNameFrom")

    const currencyImagenFrom = document.querySelector(".currency-imagen-from")


    if(convertCurrencyFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real brasileiro"
        currencyImagenFrom.src = "./assets/Real.png"
    }

    if(convertCurrencyFrom.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar americano"
        currencyImagenFrom.src = "./assets/Dollar.png"
    }

    if(convertCurrencyFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImagenFrom.src = "./assets/Euro.png"
    }

    if(convertCurrencyFrom.value == "libra") {
        currencyNameFrom.innerHTML = "Libra esterlina"
        currencyImagenFrom.src = "./assets/libra.png"
    }

    if(convertCurrencyFrom.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyImagenFrom.src = "./assets/bitcoin.png"
    }

    convertValue ()
}


// Troca dos nomes e das bandeiras das moedas trocadas

function flagChangeTo () {

    const currencyNameTo = document.getElementById("currencyNameTo")

    const currencyImagenTo = document.querySelector(".currency-imagen-to")


    if(convertedCurrencyTo.value == "dolar") {
        currencyNameTo.innerHTML = "Dólar americano"
        currencyImagenTo.src = "./assets/Dollar.png"
    }

    if(convertedCurrencyTo.value == "euro") {
        currencyNameTo.innerHTML = "Euro"
        currencyImagenTo.src = "./assets/Euro.png"
    }

    if(convertedCurrencyTo.value == "libra") {
        currencyNameTo.innerHTML = "Libra esterlina"
        currencyImagenTo.src = "./assets/libra.png"
    }

    if(convertedCurrencyTo.value == "bitcoin") {
        currencyNameTo.innerHTML = "Bitcoin"
        currencyImagenTo.src = "./assets/bitcoin.png"
    }

    if(convertedCurrencyTo.value == "real") {
        currencyNameTo.innerHTML = "Real brasileiro"
        currencyImagenTo.src = "./assets/Real.png"
    }

    convertValue ()
}


// 3º Criando uma função para que possa converter o valor, assim que o button for clicado
function convertValue () {
    const inputValues = document.querySelector(".input-values").value // 4º Criamos uma variável para pegarmos o valor dentro do input

    const currencyValuetoCovertFrom = document.querySelector(".currencyValuetoCovertFrom") // 6º criamos a variável para o valor que será convertido

    const currencyValueTo = document.querySelector(".currencyValueTo") // 7º Criamos uma variável para o valor que será convertido

    const dolarToday = 5.01 // 5º Criamos uma variável para pegar o dolar
    const euroToday = 5.36
    const libraToday = 6.12
    const bitcoinToday = 154561.63

    // 9º Mapeando meu select para saber quando ele for trocar de moeda
const convertedCurrencyTo = document.querySelector(".converted-currency-to")

const convertCurrencyFrom = document.querySelector(".convert-currency-from")

if (convertCurrencyFrom.value == 'real' && convertedCurrencyTo.value == 'dolar') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValues / dolarToday)
}

if (convertCurrencyFrom.value == 'real' && convertedCurrencyTo.value == 'euro') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValues / euroToday)
}

if (convertCurrencyFrom.value == 'real' && convertedCurrencyTo.value == 'libra') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputValues / libraToday)
}

if (convertCurrencyFrom.value == 'real' && convertedCurrencyTo.value == 'bitcoin') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputValues / bitcoinToday)
}

if (convertCurrencyFrom.value == 'real' && convertedCurrencyTo.value == 'real') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues)
}

if (convertCurrencyFrom.value == 'dolar' && convertedCurrencyTo.value == 'dolar') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValues)
}

if (convertCurrencyFrom.value == 'dolar' && convertedCurrencyTo.value == 'euro') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format((inputValues * dolarToday) / euroToday)
}

if (convertCurrencyFrom.value == 'dolar' && convertedCurrencyTo.value == 'libra') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format((inputValues * dolarToday) / libraToday)
}

if (convertCurrencyFrom.value == 'dolar' && convertedCurrencyTo.value == 'bitcoin') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format((inputValues * dolarToday) / bitcoinToday)
}

if (convertCurrencyFrom.value == 'dolar' && convertedCurrencyTo.value == 'real') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues * dolarToday)
}

if (convertCurrencyFrom.value == 'euro' && convertedCurrencyTo.value == 'dolar') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format((inputValues * euroToday) / dolarToday)
}

if (convertCurrencyFrom.value == 'euro' && convertedCurrencyTo.value == 'euro') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValues)
}

if (convertCurrencyFrom.value == 'euro' && convertedCurrencyTo.value == 'libra') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format((inputValues * euroToday) / libraToday)

}

if (convertCurrencyFrom.value == 'euro' && convertedCurrencyTo.value == 'bitcoin') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format((inputValues * euroToday) / bitcoinToday)

}

if (convertCurrencyFrom.value == 'euro' && convertedCurrencyTo.value == 'real') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues * euroToday)

}

if (convertCurrencyFrom.value == 'libra' && convertedCurrencyTo.value == 'dolar') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format((inputValues * libraToday) / dolarToday)

}

if (convertCurrencyFrom.value == 'libra' && convertedCurrencyTo.value == 'euro') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format((inputValues * libraToday) / euroToday)

}

if (convertCurrencyFrom.value == 'libra' && convertedCurrencyTo.value == 'libra') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputValues)

}

if (convertCurrencyFrom.value == 'libra' && convertedCurrencyTo.value == 'bitcoin') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format((inputValues * libraToday) / bitcoinToday)

}

if (convertCurrencyFrom.value == 'libra' && convertedCurrencyTo.value == 'real') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues * libraToday)

}

if (convertCurrencyFrom.value == 'bitcoin' && convertedCurrencyTo.value == 'dolar') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format((inputValues * bitcoinToday) / dolarToday)

}

if (convertCurrencyFrom.value == 'bitcoin' && convertedCurrencyTo.value == 'euro') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format((inputValues * bitcoinToday) / euroToday)

}

if (convertCurrencyFrom.value == 'bitcoin' && convertedCurrencyTo.value == 'libra') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format((inputValues * bitcoinToday) / libraToday)

}

if (convertCurrencyFrom.value == 'bitcoin' && convertedCurrencyTo.value == 'bitcoin') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputValues)

}

if (convertCurrencyFrom.value == 'bitcoin' && convertedCurrencyTo.value == 'real') {
    currencyValuetoCovertFrom.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputValues)

    currencyValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues * bitcoinToday)

}

}
convertButton.addEventListener("click", convertValue) // 2º Craindo um ouvinte para que quando o botão for clicado, ele traga o valor
convertCurrencyFrom.addEventListener("change", flagChangeFrom)
convertedCurrencyTo.addEventListener("change", flagChangeTo)