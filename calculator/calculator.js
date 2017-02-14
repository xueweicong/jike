/**
 * Created by xwc on 2016/12/12.
 */
var screen = document.getElementById("screen");
screen.iseval = false;   //该属性是为了点击过等号后点击数字时重置屏幕，点击运算符不重置。


//输入数字,分别有11个数字包括“.”
var numbtn = document.getElementsByClassName("num_btn");
// var numbtn2 = document.getElementById("num_btn9");
// console.log(numbtn2);
function numberclick() {             //兼容
    //console.log("111");
    for (var i=0; i<11; i++){
        if (numbtn[i].addEventListener){
            //console.log("122");
            numbtn[i].addEventListener("click", getNum, false);
            //console.log("128");
        }else if(numbtn[i].attachEvent){
            numbtn[i].attachEvent("onclick", getNum);
        }else {
            numbtn[i].onclick = getNum();
        }
    }
}


function getNum(){
    //若已点击过等号，则输入数字时重置
    var num = this.getAttribute("value");
    console.log("123");
    if (screen.iseval == true){
        screen.iseval = false;
        screen.value = 0;
    }
    //屏幕为0时去掉没用的0
    if (screen.value == '0'){
        if (num == '.'){
            screen.value += num;
        }
        else {
            screen.value = num;
        }
    }
    //不能连续“.”及补全小数点的0
    else if(num == '.'){
        // alert(screen.value.substr(-1));
        // screen.value += num;
        var regexp = new RegExp("[0123456789.]+","ig");
        var temp = screen.value.match(regexp).reverse();
        // console.log(temp);
        //
        // if (temp[0].indexOf('.') == -1){
        //     screen.value += num;
        // }
        switch (screen.value.substr(-1)){
            case '.':break;
            case '+':
                screen.value += '0.';
                break;
            case '-':
                screen.value += '0.';
                break;
            case '*':
                screen.value += '0.';
                break;
            case '/':
                screen.value += '0.';
                break;
            case '%':
                screen.value += '0.';
                break;
            default:
                // console.log(temp[0]);
                if (temp[0].indexOf('.') == -1){
                    screen.value += num;
                }
                break;
        }
    }
    else {
        screen.value += num;
    }
}
numberclick();

//运算符
var operbtn = document.getElementsByClassName("oper_btn");
function operclick() {
    for (var i = 0; i <5; i++){
        if (operbtn[i].addEventListener){
            operbtn[i].addEventListener("click", getOperator, false);
        }else if(operbtn[i].attachEvent){
            operbtn[i].attachEvent("onclick", getOperator);
        }else {
            operbtn[i].onclick = getOperator;
        }
    }
}
operclick();
function getOperator() {
    var item = this.getAttribute("value");
    if (screen.iseval == true) {
        screen.iseval = false;
    }
    //当屏幕只有0时，减号作为负数
    if (screen.value == '0'){
        if (item == '-'){
            screen.value = item;
        }
    }
    else{
        //不能连续输入运算符，但除 -- 外 +-、*- 可以
        if (screen.value.substr(-1) =='+' || screen.value.substr(-1) =='-' || screen.value.substr(-1) =='*' || screen.value.substr(-1) =='/' || screen.value.substr(-1) =='%'){
            if (item == '-'){
                if (screen.value.substr(-1) != '-'){
                    screen.value += item;
                }
                // if ()
                // screen.value += item;
            }
        }
        else {
            screen.value += item;
        }
    }
}

var tanbtn = document.getElementById("tan");
function tanclick() {
    //console.log("111");
    if (tanbtn.addEventListener){
        //console.log("129");
        tanbtn.addEventListener("click", getTan, false);
    }else if(tanbtn.attachEvent){
        tanbtn.attachEvent("onclick", getTan);
    }else {
        tanbtn.onclick = getTan;
    }
    // tanbtn.onclick = getTan;
    // console.log("125");
}
function getTan() {
    screen.iseval = true;
    screen.value = Math.tan(screen.value);
}
tanclick();

var sinbtn = document.getElementById("sin");
function sinclick() {
    if (sinbtn.addEventListener){
        //console.log("129");
        sinbtn.addEventListener("click", getSin, false);
    }else if(sinbtn.attachEvent){
        sinbtn.attachEvent("onclick", getSin);
    }else {
        sinbtn.onclick = getSin;
    }
}
sinclick();
function getSin() {
    screen.iseval = true;
    screen.value = Math.sin(screen.value);
}
var cosbtn = document.getElementById("cos");
function cosclick() {
    if (cosbtn.addEventListener){
        //console.log("129");
        cosbtn.addEventListener("click", getCos, false);
    }else if(cosbtn.attachEvent){
        cosbtn.attachEvent("onclick", getCos);
    }else {
        cosbtn.onclick = getCos;
    }
}
cosclick();
function getCos() {
    screen.iseval = true;
    screen.value = Math.cos(screen.value);
}

function getSqrt() {
    screen.iseval = true;
    screen.value = Math.sqrt(screen.value);
}

//等号
var evalbtn = document.getElementById("evalbtn");
function evalclick() {
    if (evalbtn.addEventListener){
        //console.log("129");
        evalbtn.addEventListener("click", eva, false);
    }else if(evalbtn.attachEvent){
        evalbtn.attachEvent("onclick", eva);
    }else {
        evalbtn.onclick = eva;
    }
}
evalclick();
function eva() {
    //检查运算符是否为0，若是则判断被除数是否等于0，为0则提示。缺陷在于不止一个运算符时可能会出错。
    if (screen.value.indexOf('/') != -1){
        // console.log(screen.value.indexOf('/'));
        // console.log("111");
        // console.log(screen.value.substr(screen.value.indexOf('/')));
        // console.log(screen.value.substr(1));
        // console.log(screen.value.substr(2));
        var regexp = new RegExp("/0[+-/*%]+","ig");
        var temp = screen.value.match(regexp);
        var regexp2 = new RegExp("/[-]?[.0123456789]+","ig");
        var temp2 = screen.value.match(regexp2);
        console.log(temp2);
        for (var i in temp2){
            if(parseFloat(temp2[i].substr(1)) - 0 === 0){
                console.log(temp2[i].substr(1));
                screen.value = 0;
                alert("被除数不能为0！");
                break;
            }
            else {
                // if (temp != null) {
                //     //if ((screen.value.substr(screen.value.indexOf('/')+1)) - 0 === 0){
                //     // console.log("2221");
                //     screen.value = 0;
                //     alert("被除数不能为0！2");
                // }
                // else {
                screen.value = eval(screen.value).toFixed(6);
                screen.iseval = true;
                // }
            }
        }
        // if (temp != null) {
        // //if ((screen.value.substr(screen.value.indexOf('/')+1)) - 0 === 0){
        //     // console.log("2221");
        //     screen.value = 0;
        //     alert("被除数不能为0！");
        // }
        // else {
        //     screen.value = eval(screen.value);
        //     screen.iseval = true;
        // }
    }
    else {
        screen.value = eval(screen.value).toFixed(6);
        screen.iseval = true;
        // console.log(screen.iseval);
    }
}


function clearAll() {
    screen.value = 0;
}
function clearOne() {
    if (screen.value.length == 1){
        screen.value = 0;
    }
    else {
    screen.value = screen.value.substring(0, screen.value.length - 1);
    }
}