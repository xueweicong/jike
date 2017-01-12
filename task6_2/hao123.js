/**
 * Created by xwc on 2016/12/14.
 */
var skinbtn = document.getElementsByClassName("skinbutton");
var currentskin = document.getElementById("layoutContainer");
// console.log(skinbtn.length);
function changecolor() {
    for (var i = 0; i < skinbtn.length; i++){
        // console.log(skinbtn[i]);
        if (skinbtn[i].addEventListener){
            // console.log("122");
            skinbtn[i].addEventListener("click", changeSkin, false);
            // break;
            //console.log("128");
        }else if(skinbtn[i].attachEvent){
            // console.log("123");
            skinbtn[i].attachEvent("onclick", changeSkin);
        }else {
            // console.log("124");
            skinbtn[i].onclick = changeSkin;
        }
    }
}
changecolor();

function changeSkin() {
    // console.log(currentskin);
    // currentskin.style.backgroundColor = this.value;
    // console.log(this.value);
    currentskin.style.backgroundColor = this.value;
    // console.log('fsdfs');

    if(!window.localStorage){
        alert("浏览器不支持localstorage");
        return false;
        // break;
    }else{
        //主逻辑业务
        var storage = window.localStorage;
        storage.setItem("backgroundcolor", this.value);
        console.log(storage["backgroundcolor"]);
    }
}

function readLocalStorage() {
    if(!window.localStorage){
        alert("浏览器不支持localstorage");
        return false;
    }else {
        var storage = window.localStorage;
        var backgroundcolor = storage.getItem("backgroundcolor");
        // console.log(backgroundcolor);
        currentskin.style.backgroundColor = backgroundcolor;
    }
}
readLocalStorage();



