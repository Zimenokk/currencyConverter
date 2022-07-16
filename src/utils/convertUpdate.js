export default function convertEngine(list, value, currencyFromNameData, currencyToNameData) {
    const currencyToRate = list.filter(item => item.cc === currencyToNameData)[0]?.rate;
    const currencyFromRate = list.filter(item => item.cc === currencyFromNameData)[0]?.rate;

    return ((currencyToRate / currencyFromRate) * value).toFixed(2)
}