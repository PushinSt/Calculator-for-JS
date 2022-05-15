
// проверка символа на операцию
function operation(c) {
    return c == '+' || c == '-' || c == '*' || c == '/';
}

// проверка символа на число
function dig(c) {
    return (c >= '0' && c <= '9');
}


//Определяем приоритет операции. 
function priority(op) {
    if (op == 'Y' || op == 'N') return 3;
    else {
        if (op == '+' || op == '-') return 1;
        else if (op == '*' || op == '/') return 2;
        else return -1;
    }
}


//вычисление отдельного числового выражения
function action(value, op) {
    if (op == 'Y' || op == 'N') {                            //для унарных операций
        var unitar = value[value.length - 1];
        value.pop();
        if (op == 'N') value.push(-unitar); //обрабатываем минус
    }
    else {                               //для бинарных операций
        var right = value[value.length - 1];
        value.pop();
        var left = value[value.length - 1];
        value.pop();
        if (op == '+') value.push(left + right);
        else if (op == '-') value.push(left - right);
        else if (op == '*') value.push(left * right);
        else if (op == '/') value.push(left / right);
    }

}



// Парсинг и расчет выражения
function calculation(formula) {
    var unary = true; // true - операция унарная (-)
    var value = []; // массив для чисел
    var op = []; //массив для операций

    for (var i = 0; i < formula.length; i++) {
        if (formula[i] == '(') {    //если нашли открывающую скобку, то складываем её в массив
            op.push('(');
            unary = true;
        }
        else if (formula[i] == ')') {
            while (op[op.length - 1] != '(') {  // если нашли закрывающую скобку, то выполняем все операции которые внутри
                action(value, op[op.length - 1]);
                op.pop();
            }
            op.pop();
            unary = false;
        }
        else if (operation(formula[i])) { // если нашли символ операции
            var zn = formula[i];
            if (unary == true) {
                if (zn == '-')
                    zn = 'N' // помечаем унарный оператор минуса
                else
                    zn = 'Y'
            }

            while (op.length != 0 && priority(op[op.length - 1]) >= priority(zn)) {
                action(value, op[op.length - 1]);   //выполняем алгебраические вычисления
                op.pop();
            }
            op.push(zn);
            unary = true;
        }
        else {
            var number = "";      //заведем строку для найденных числовых операндов
            while (i < formula.length && ((formula[i] >= '0' && formula[i] <= '9') || formula[i] == '.'))
                number += formula[i++];
            i--;
            value.push(parseFloat(number)); //поместим в наш массив с числовыми выражениями
            unary = false;
        }
    }

    while (op.length != 0) {     //выполним еще не использованные операции в стеке 
        action(value, op[op.length - 1]);
        op.pop();
    }
    return value[value.length - 1]; //получим на выходе значение выражения
}



if (typeof exports !== 'undefined') {
    module.exports.calculation = calculation;
}