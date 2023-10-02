import { currencyRates } from '@/info/currency/currencyRates';
import { calculateOriginal } from '@/utils/calculateOriginalPrice';
import { convertFromUSD } from '@/utils/convertCurrencies';
import { useTypedSelector } from './useTypedSelector';
import { ProductType } from '@/types/productsType';

export default function useChangeCurrency(data: ProductType) {
    const { chosenCurrency } = useTypedSelector((state) => state.currency);
    const currency = currencyRates.filter((item) => item.hasOwnProperty(chosenCurrency));
    const productPrice =
        data && chosenCurrency !== 'USD'
            ? convertFromUSD(data.price, currency[0][chosenCurrency])
            : data && data?.price;

    const originalPrice = data && calculateOriginal(productPrice as number, data.discountPercentage);
    const currencySign = chosenCurrency === 'EUR' ? '€' : chosenCurrency === 'UAH' ? 'UAH' : '$';
    return {
        productPrice, originalPrice, currencySign
    }
}
