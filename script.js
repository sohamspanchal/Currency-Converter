async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const apiKey = 'e1fd1c00e76611b80ee3298c'; // Replace with your API key from ExchangeRate-API
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.result === 'success') {
            const conversionRate = data.conversion_rates[toCurrency];
            const convertedAmount = amount * conversionRate;
            document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
        } else {
            document.getElementById('result').innerText = 'Error fetching conversion rates.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error fetching conversion rates.';
    }
}
