function converter() {
    // Obtém o valor inserido pelo usuário
    const valor = parseFloat(document.getElementById("valor").value);

    // Obtém as moedas selecionadas pelo usuário
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;

    // Define as taxas de conversão (com valores fictícios)
    const taxasDeConversao = {
        BRL: { USD: 0.20, EUR: 0.18, JPY: 29.44, ARS: 39.55, GBP: 0.16, CHF: 0.18, CAD: 0.27, MXN: 3.74, RUB: 18.64, SEK: 2.12, AUD: 0.31, KRW: 264.61, AED: 0.73 },
        USD: { BRL: 5.10, EUR: 0.90, JPY: 146.98, ARS: 197.75, GBP: 0.80, CHF: 0.91, CAD: 1.35, MXN: 18.70, RUB: 92.78, SEK: 10.60, AUD: 1.50, KRW: 1320.50, AED: 3.67 },
        EUR: { BRL: 5.55, USD: 1.10, JPY: 162.09, ARS: 220.92, GBP: 0.89, CHF: 1.01, CAD: 1.51, MXN: 20.74, RUB: 102.99, SEK: 11.77, AUD: 1.67, KRW: 1467.31, AED: 4.07 },
        JPY: { BRL: 0.034, USD: 0.0068, EUR: 0.0062, ARS: 1.36, GBP: 0.0055, CHF: 0.006, CAD: 0.0092, MXN: 0.13, RUB: 0.64, SEK: 0.072, AUD: 0.012, KRW: 9.01, AED: 0.025 },
        ARS: { BRL: 0.025, USD: 0.005, EUR: 0.0045, JPY: 0.74, GBP: 0.0045, CHF: 0.005, CAD: 0.0075, MXN: 0.10, RUB: 0.47, SEK: 0.054, AUD: 0.008, KRW: 6.60, AED: 0.018 },
        GBP: { BRL: 6.16, USD: 1.25, EUR: 1.13, JPY: 180.81, ARS: 222.23, CHF: 1.13, CAD: 1.68, MXN: 22.11, RUB: 115.53, SEK: 13.23, AUD: 1.86, KRW: 1653.50, AED: 4.56 },
        CHF: { BRL: 5.47, USD: 1.10, EUR: 0.99, JPY: 156.39, ARS: 206.56, GBP: 0.89, CAD: 1.55, MXN: 21.57, RUB: 106.79, SEK: 12.36, AUD: 1.72, KRW: 1492.91, AED: 4.17 },
        CAD: { BRL: 3.69, USD: 0.74, EUR: 0.66, JPY: 103.46, ARS: 138.65, GBP: 0.60, CHF: 0.65, MXN: 14.68, RUB: 70.62, SEK: 8.12, AUD: 1.13, KRW: 989.06, AED: 2.80 },
        MXN: { BRL: 0.27, USD: 0.053, EUR: 0.048, JPY: 7.76, ARS: 10.04, GBP: 0.045, CHF: 0.046, CAD: 0.068, RUB: 4.81, SEK: 0.56, AUD: 0.078, KRW: 71.15, AED: 0.20 },
        RUB: { BRL: 0.054, USD: 0.011, EUR: 0.0097, JPY: 1.56, ARS: 2.14, GBP: 0.0086, CHF: 0.0094, CAD: 0.014, MXN: 0.21, SEK: 0.024, AUD: 0.032, KRW: 30.99, AED: 0.087 },
        SEK: { BRL: 0.47, USD: 0.095, EUR: 0.085, JPY: 13.88, ARS: 18.52, GBP: 0.076, CHF: 0.081, CAD: 0.12, MXN: 1.77, RUB: 41.85, AUD: 6.77, KRW: 134.31, AED: 0.37 },
        AUD: { BRL: 3.22, USD: 0.67, EUR: 0.60, JPY: 94.43, ARS: 125.74, GBP: 0.54, CHF: 0.58, CAD: 0.89, MXN: 12.85, RUB: 60.73, SEK: 6.77, KRW: 809.50, AED: 2.33 },
        KRW: { BRL: 0.0038, USD: 0.00076, EUR: 0.00069, JPY: 0.11, ARS: 0.15, GBP: 0.00067, CHF: 0.00067, CAD: 0.00091, MXN: 0.013, RUB: 0.045, SEK: 0.0074, AUD: 0.0012, AED: 0.0034 },
        AED: { BRL: 1.37, USD: 0.27, EUR: 0.24, JPY: 38.74, ARS: 51.12, GBP: 0.22, CHF: 0.24, CAD: 0.36, MXN: 5.04, RUB: 23.24, SEK: 2.66, AUD: 0.43, KRW: 378.79 }
    };

    // Verifica se o valor inserido é válido
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido!");
        return;
    }

    // Se a moeda de origem e a moeda de destino forem iguais
    if (moedaOrigem === moedaDestino) {
        document.getElementById("resultado").textContent = valor.toFixed(2); // Apenas exibe o valor sem fazer a conversão
        return;
    }

    // Realiza a conversão
    const resultado = valor * taxasDeConversao[moedaOrigem][moedaDestino];

    // Exibe o resultado
    document.getElementById("resultado").textContent = resultado.toFixed(2);
}
