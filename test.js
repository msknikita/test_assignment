var json = '{ "displayedName": {'+
        '"displayedName": {'+
            '"value": ["Профиль маячковый ПВХ 10 мм L3м"],'+
            '"description": "Полное наименование товара для клиента"}},'+
    '"stock": {'+
        '"stocks": {'+
                '"34": {'+ 
                '"2": "35", "3": "42","4": "58","5": "57","6": "112","20": "51","22": "78","26": "34","32": "22","35": "358","40": "28","43": "68","45": "58","49": "31","51": "29","56": "42","62": "26","64": "0","65": "57","86": "15","114": "41","117": "46","143": "46","162": "4","171": "0","176": "12"}}}}';

var obj = JSON.parse(json);
var rnumber = obj.stock.stocks["34"];

var result = max();
console.log(result.amount);
console.log(result.number);

function getName() {
    console.log(obj.displayedName.displayedName.description);    
}

function numbers() {
    const array = [];

    for(x in rnumber){
        if(rnumber[x] > 0)
            array.push(x);
    }

    console.log("Массив номеров магазинов, в которых есть товары в наличии:")
    for(i = 0; i < array.length; i++)
        console.log(array[i]);
}

function max() {
    var tmp_amount = rnumber["2"];
    var tmp_number;

    for(x in rnumber){
        if(rnumber[tmp_amount] > tmp_amount){
            tmp_amount = rnumber[tmp_amount];
            tmp_number = rnumber[x];
        }
    }

    return {
        amount: tmp_amount,
        number: tmp_number
    };
}