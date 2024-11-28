// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

//Funciones cambio de moneda
// Un Euro es:
let oneEuroIs = {
    "JPY": 156.5, // yen
    "USD": 1.07, // dollar
    "GBP": 0.87, // pound
};

const fromDollarToYen = (dollar) => {
    let euro = dollar / oneEuroIs.USD;
    let yen =  euro * oneEuroIs.JPY;
    let redondeoYen = parseFloat(yen.toFixed(2));
    return redondeoYen;
} 

const fromEuroToDollar = (euro) => {
    let dollar = euro * oneEuroIs.USD;
    let redondeoDollar = parseFloat(dollar.toFixed(2));
    return redondeoDollar;
}

const fromYenToPound = (yen) => {
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;
    let redondeoPound = parseFloat(pound.toFixed(2));
    return redondeoPound;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };