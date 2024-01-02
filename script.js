let rates;
document.getElementById("input").addEventListener("input", convertCurrency);
fetch("https://open.er-api.com/v6/latest/USD")
  .then((result) => result.json())
  .then((data) => {
    rates = data.rates;
    let currencySelect = document.getElementById("currencySelect");
    let convertedCurrencySelect = document.getElementById(
      "convertedCurrencySelect"
    );
    for (let currency in rates) {
      let option = document.createElement("option");
      option.value = currency;
      option.textContent = currency;
      currencySelect.appendChild(option);
      let convertedOption = document.createElement("option");
      convertedOption.value = currency;
      convertedOption.textContent = currency;
      convertedCurrencySelect.appendChild(convertedOption);
    }
  })
  .catch((error) => console.error(error));
document
  .getElementById("convertButton")
  .addEventListener("click", convertCurrency);
function convertCurrency() {
  let amountInUSD = parseFloat(document.getElementById("input").value);
  let selectedCurrency = document.getElementById("currencySelect").value;
  let convertedCurrency = document.getElementById(
    "convertedCurrencySelect"
  ).value;
  let conversionRate = rates[convertedCurrency] / rates[selectedCurrency];
  let convertedAmount = amountInUSD * conversionRate;
  document.getElementById("output").value = convertedAmount.toFixed(2);
}
