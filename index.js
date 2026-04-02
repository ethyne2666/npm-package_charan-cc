import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_wAyPKcFVsS9Jviy30Hjsd42QBQ0awHJ08e7GJ1WJ');

export async function convertCurrency(fromCurrency, toCurrency, units){

const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency];
    return multiplier*units; 

}
