
Calc = false // Текущаяя операция. false - ввод выражения, true - вывод результата
var memoryVal = 0; // Выражение в памяти калькулятора
memorystroka = "";  // Сохранение выражения для клавиши rvt



//Кнопки для работы с памятью
function memoryOp(com) {
    //1 - Удалить
    //2 - запись
    //3 - отобразить
    //4 - +
    //5 - -
    str = document.getElementById("nummessege");

    switch (com) {
        case 1:
            memoryVal = 0;
            break;
        case 2:
            memoryVal = str.value;
            break;
        case 3:
            str.value = memoryVal;
            break;
        case 4:
            strBuf = str.value + "+" + memoryVal.toString();

            memoryVal = calculation(strBuf)
            break;
        case 5:
            strBuf = str.value + "-" + memoryVal.toString();
            memoryVal = calculation(strBuf)
            break;
        default:
            console.log("Swicth #1 don't work");
    }
}


// Кнопка +/-
function plusminus() {
    str = document.getElementById("nummessege");

    stroka = str.value;
    index = stroka.length - 1;
    if (stroka[index] == ')' || stroka[index] == '(') return;

    //Ищем последнее число в строке
    while (index >= 0) {
        if (!dig(stroka[index]) && (stroka[index] != '.'))
            break;
        index--;
    }

    console.log(index);
    if (index == -1) {
        strBuf = '-' + stroka
    }
    else
        switch (stroka[index]) {
            case '+':
                strBuf = stroka.substr(0, index) + '-' + stroka.substr(index + 1, stroka.length - 1)
                break;
            case '-':
                strBuf = stroka.substr(0, index) + '+' + stroka.substr(index + 1, stroka.length - 1)
                break;
            case '*':
                strBuf = stroka.substr(0, index + 1) + '-' + stroka.substr(index + 1, stroka.length - 1)
                break;
            case '/':
                strBuf = stroka.substr(0, index + 1) + '-' + stroka.substr(index + 1, stroka.length - 1)
                break;
            case ')':
                strBuf = stroka.substr(0, index + 1) + '-' + stroka.substr(index + 1, stroka.length - 1)
                break;
            case '(':
                strBuf = stroka.substr(0, index + 1) + '-' + stroka.substr(index + 1, stroka.length - 1)
                break;
            default:
                console.log("Swicth2 don't work");
                return;
        }
    console.log(strBuf);
    str.value = strBuf;

}


// обработка нажатия на клавиши ввода
function clickKey(nums) {
    str = document.getElementById("nummessege");
    var ch = str.value[str.value.length - 1];



    if (str.value.length == 0)
        if (nums == "*" || nums == "/" || nums == "+" || nums == ")")
            return;

    if (Calc == true) {
        if (dig(nums)) {
            str.value = nums
        } else
            if (operation(nums)) {
                str.value = str.value + nums;
            } else str.value = "";
        Calc = false
        return;
    }
    else {
        if (operation(nums)) {
            if ((!operation(ch)) && (ch != '.'))
                str.value = str.value + nums
        }
        else str.value = str.value + nums

    }


    return str.value;
}

// Удаление одного символа
function clickDelOne() {
    if (Calc == false) {
        str = document.getElementById("nummessege")
        str.value = str.value.substr(0, str.value.length - 1)
    } else {
        clickDel()
    }
}

// удаление строки
function clickDel() {
    str = document.getElementById("nummessege")
    str.value = ""

}

// кнопка =
function clickRes() {
    str = document.getElementById("nummessege")
    memorystroka = str.value;
    str.value = calculation(memorystroka);
    Calc = true
}


//Клавиша rvt
function rvt() {
    str = document.getElementById("nummessege");
    if (Calc) {
        str.value = memorystroka;
    }
}





if (typeof exports !== 'undefined') {
    module.exports.clickKey = clickKey;
}