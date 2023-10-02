import axios from "axios";

type currencyRateType = {
    [key: string]: number;
}

type dataResponse = {
    data: {
        conversion_rates: currencyRateType
    }
}


export const currencyRates: currencyRateType[] = [];

async function getCurrencyRates() {
    try {
        const { data }: dataResponse = await axios.get(
            `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGE_API_KEY}/latest/USD`
        );
        Object.entries(data.conversion_rates).map(([key, value]) =>
            key == 'EUR' || key == 'UAH' ? currencyRates.push({ [key]: value }) : ''
        );


    } catch (err) {
        return err;
    }
}

getCurrencyRates();


