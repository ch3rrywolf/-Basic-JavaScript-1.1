function bold(){
    document.querySelector('p').style.fontWeight="bold";
}

function italic(){
    document.querySelector('p').style.fontStyle="italic";
}

function underlined(){
 document.querySelector('p').style.textDecoration="underline";
}

function mysize(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("myP").style.fontSize = listValue;
}

function myFont(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("myP").style.fontFamily = listValue;
}