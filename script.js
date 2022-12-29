var Myscreen, Mybutton, MyAnswer;

//function to switch themes
function MyTheme(Mycolor){
    if(Mycolor=='dark'){
        document.getElementById("body").style.backgroundColor="#000";
        document.getElementById("dark").style.backgroundColor="#fff";
        document.getElementById('green').style.backgroundColor=" rgb(68, 65, 65)"
        document.getElementById('blue').style.backgroundColor=" rgb(68, 65, 65)";
        document.getElementById('equal').style.backgroundColor=" rgb(68, 65, 65)"
        document.getElementById('equal').style.color=" #fff";
        document.getElementById('plus').style.color="#fff"
        document.getElementById('minus').style.color="#fff";
        document.getElementById('times').style.color="#fff"
        document.getElementById('divide').style.color="#fff";
    }
    else if(Mycolor=='blue'){
        document.getElementById("body").style.backgroundColor=" #010120";
        document.getElementById("dark").style.backgroundColor=" #202074";
        document.getElementById('green').style.backgroundColor="  #202074"
        document.getElementById('blue').style.backgroundColor=" #fff";
        document.getElementById('equal').style.backgroundColor="  #0c0c36"
        document.getElementById('equal').style.color=" #2e2ef3";
        document.getElementById('plus').style.color="#2e2ef3"
        document.getElementById('minus').style.color="#2e2ef3";
        document.getElementById('times').style.color="#2e2ef3"
        document.getElementById('divide').style.color="#2e2ef3";
    }
    else if(Mycolor=='green'){
        document.getElementById("body").style.backgroundColor="  rgb(1, 26, 1)";
        document.getElementById("dark").style.backgroundColor="  rgb(28, 75, 28)";
        document.getElementById('green').style.backgroundColor="  #fff"
        document.getElementById('blue').style.backgroundColor="  rgb(28, 75, 28)";
        document.getElementById('equal').style.backgroundColor="    rgb(7, 41, 7)"
        document.getElementById('equal').style.color="  rgb(100, 170, 100) ";
        document.getElementById('plus').style.color="  rgb(100, 170, 100)"
        document.getElementById('minus').style.color="  rgb(100, 170, 100)";
        document.getElementById('times').style.color="  rgb(100, 170, 100)"
        document.getElementById('divide').style.color=" rgb(100, 170, 100)";
    }
}


/**
 * fucntion to control:
 * Number buttons
 * operator buttons*/  

function btn(number) {


    Myscreen = document.getElementById("Myscreen");
    let val = Number(Myscreen.innerText);
    let MyNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var replaced;

    // Sets the max length of inputs to 21 
    if (Myscreen.innerText.length==30) {
        return false;
    }
   else if (Myscreen.innerText !=""  && Myscreen.innerText.length == 12) {
        document.getElementById('Myscreen').style.fontSize="20px";

    }
    else if (Myscreen.innerText.length<= 1) {
        document.getElementById('Myscreen').style.fontSize="35px";

    }
    else if (Myscreen.innerText.length >= 13) {
        document.getElementById('Myscreen').style.fontSize="15px";

    }
    


    //stops the decimal point from repeating itself in a number
    else if (Myscreen.innerText.includes('.') && !(Myscreen.innerText.includes('+')) && number == '.') {
        
        return false;

    }
    else if (Myscreen.innerText.includes('.') && !(Myscreen.innerText.includes('-')) && number == '.') {
        
        return false;

    }
    else if (Myscreen.innerText.includes('.') && !(Myscreen.innerText.includes('*')) && number == '.') {
        
        return false;

    }
    else if (Myscreen.innerText.includes('.') && !(Myscreen.innerText.includes('/')) && number == '.') {
        
        return false;

    }
    else if (Myscreen.innerText.at(-1) == '.' && number == '+') {
        replaced = Myscreen.innerText.slice(0, -1) + '.0+';
        Myscreen.innerText = replaced
        return Myscreen.innerText;

    }
    else if (Myscreen.innerText.at(-1) == '.' && number == '-') {
        replaced = Myscreen.innerText.slice(0, -1) + '.0-';
        Myscreen.innerText = replaced
        return Myscreen.innerText;

    }
    else if (Myscreen.innerText.at(-1) == '.' && number == '*') {
        replaced = Myscreen.innerText.slice(0, -1) + '.0*';
        Myscreen.innerText = replaced
        return Myscreen.innerText;

    }
    else if (Myscreen.innerText.at(-1) == '.' && number == '/') {
        replaced = Myscreen.innerText.slice(0, -1) + '.0/';
        Myscreen.innerText = replaced
        return Myscreen.innerText;

    }
    

    
    else if (Myscreen.innerText.at(-1) == '.' && number == '.') {
        replaced = Myscreen.innerText.slice(0, -1) + '.';
        Myscreen.innerText = replaced
        return Myscreen.innerText;

    }
    else if (Myscreen.innerText == "" && number == '.') {
        return Myscreen.innerText = 0 + '.';
    }


    else if (Myscreen.innerText.at(-1) == '/' && number == '*') {
        replaced = Myscreen.innerText.slice(0, -1) + '*';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '*' && number == '/') {
        replaced = Myscreen.innerText.slice(0, -1) + '/';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '-' && number == '+') {
        replaced = Myscreen.innerText.slice(0, -1) + '+';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '+' && number == '-') {
        replaced = Myscreen.innerText.slice(0, -1) + '-';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '+' && number == '*') {
        replaced = Myscreen.innerText.slice(0, -1) + '*';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '*' && number == '+') {
        replaced = Myscreen.innerText.slice(0, -1) + '+';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '*' && number == '-') {
        replaced = Myscreen.innerText.slice(0, -1) + '-';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '-' && number == '*') {
        replaced = Myscreen.innerText.slice(0, -1) + '*';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '/' && number == '+') {
        replaced = Myscreen.innerText.slice(0, -1) + '+';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '+' && number == '/') {
        replaced = Myscreen.innerText.slice(0, -1) + '/';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '-' && number == '/') {
        replaced = Myscreen.innerText.slice(0, -1) + '/';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '/' && number == '-') {
        replaced = Myscreen.innerText.slice(0, -1) + '-';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '/' && number == '/') {
        replaced = Myscreen.innerText.slice(0, -1) + '/';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '-' && number == '-') {
        replaced = Myscreen.innerText.slice(0, -1) + '-';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '+' && number == '+') {
        replaced = Myscreen.innerText.slice(0, -1) + '+';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText.at(-1) == '*' && number == '*') {
        replaced = Myscreen.innerText.slice(0, -1) + '*';
        Myscreen.innerText = replaced
        return Myscreen.innerText;
    }
    else if (Myscreen.innerText === "" && number == '/') {
       return false ;

    }
    else if (Myscreen.innerText === "" && number == '*') {
        return false;

    }
    else if (Myscreen.innerText === "" && number == '+') {
        return false;

    }

    /**
     * clears out the NaN and Infinity error if:
     * Button clicked is a number
     * Button clicked is an operator
     */
    else if (Myscreen.innerText == "NaN" && number == 0) {
        return Myscreen.innerText = 0;
    }
    else if (Myscreen.innerText == "NaN" && number == '.') {
        return Myscreen.innerText = 0 + number;
    }
    else if (Myscreen.innerText == "NaN" && number == '+') {
        return Myscreen.innerText = "";
    }
    else if (Myscreen.innerText == "NaN" && number == '*') {
        return Myscreen.innerText = "";
    }
    else if (Myscreen.innerText == "NaN" && number == '-') {
        return Myscreen.innerText = "-";
    }
    else if (Myscreen.innerText == "NaN" && number == '/') {
        return Myscreen.innerText = "";
    }

    else if (Myscreen.innerText == "NaN" && number == MyNumbers.indexOf(number)) {
        return Myscreen.innerText = number;
    }
    else if (Myscreen.innerText == "Infinity" && number == MyNumbers.indexOf(number)) {
        return Myscreen.innerText = number;
    }
    

    Myscreen.innerText += number;

    return val;

}

function MyAnswer() {
    Myscreen = document.getElementById("Myscreen");

    Myscreen.innerText;
        document.getElementById('Myscreen').style.fontSize="20px";
    if (Myscreen.innerText.includes('√')) {
      var  MyAnswer = Math.sqrt(Myscreen.innerText.slice(1));
        Myscreen.innerText = MyAnswer;
        return MyAnswer;
    }
    else if (Myscreen.innerText.length > 7 && Myscreen.innerText == MyAnswer) {
        document.getElementById('Myscreen').style.fontSize="20px";

    }
   

    else if (Myscreen.innerText.includes('+') || (Myscreen.innerText.includes('-'))
        || (Myscreen.innerText.includes('/')) || (Myscreen.innerText.includes('*'))) {
       var MyAnswer = eval(Myscreen.innerText);
        Myscreen.innerText = MyAnswer;
        return MyAnswer;

    }
    
   
    

} 
//calculates percentage
function pct() {
    Myscreen = document.getElementById("Myscreen");
    MyAnswer = Myscreen.innerText / 100
    Myscreen.innerText = MyAnswer;
    return MyAnswer;
}


//backspace function
function clearScreen() {
    if (document.getElementById("Myscreen").innerText != "") {
        document.getElementById("Myscreen").innerText = "";
    }

}

function backSpace() {
    Myscreen = document.getElementById("Myscreen");
    Myscreen.innerText;
    var rdc;
    if (Myscreen.innerText != "" && Myscreen.innerText.length <= 7) {
        rdc = Myscreen.innerText.slice(0, -1);
        document.getElementById('Myscreen').style.fontSize="35px";

        Myscreen.innerText = rdc;
        return Myscreen.innerText;  


    

    }
    rdc = Myscreen.innerText.slice(0, -1);
    Myscreen.innerText = rdc;
    return Myscreen.innerText;

}



