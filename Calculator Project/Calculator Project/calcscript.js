$(document).ready(function(){
    $('#one').click(function(){
        document.forms.display.value += 1;
    });

    $('#two').click(function(){
        document.forms.display.value += 2;
    });

    $('#three').click(function(){
        document.forms.display.value += 3;
    });

    $('#four').click(function(){
        document.forms.display.value += 4;
    });

    $('#five').click(function(){
        document.forms.display.value += 5;
    });

    $('#six').click(function(){
        document.forms.display.value += 6;
    });

    $('#seven').click(function(){
        document.forms.display.value += 7;
    });

    $('#eight').click(function(){
        document.forms.display.value += 8;
    });

    $('#nine').click(function(){
        document.forms.display.value += 9;
    });

    $('#zero').click(function(){
        document.forms.display.value += 0;
    });

    $('#point').click(function(){
        document.forms.display.value += ".";
    });

    $('#add').click(function(){
        document.forms.display.value += "+";
    });

    $('#divide').click(function(){
        document.forms.display.value += "/";
    });

    $('#multiply').click(function(){
        document.forms.display.value += "*";
    });

    $('#subtract').click(function(){
        document.forms.display.value += "-";
    });

    $('#clear').click(function(){
        document.forms.display.value = "";

    });
    $('#equals').click(() => {
        if (display.value == ""){
            alert("Please enter a valid number to be calculated!");
        }else if (display.value == 1 ) {
            alert("Syntax Error");
        }else if (display.value == 2 ) {
            alert("Syntax Error");
        }else if (display.value == 3 ) {
            alert("Syntax Error");
        }else if (display.value == 4 ) {
            alert("Syntax Error");
        }else if (display.value == 5 ) {
            alert("Syntax Error");
        }else if (display.value == 6 ) {
            alert("Syntax Error");
        }else if (display.value == 7 ) {
            alert("Syntax Error");
        }else if (display.value == 8 ) {
            alert("Syntax Error");
        }else if (display.value == 9 ) {
            alert("Syntax Error");
        }else if (display.value == 0 ) {
            alert("Syntax Error");
        }else if (display.value == "." ) {
            alert("Syntax Error");
        }else if (display.value == "+" ) {
            alert("Syntax Error");
        }else if (display.value == "-" ) {
            alert("Syntax Error");
        }else if (display.value == "*" ) {
            alert("Syntax Error");
        }else if (display.value == "-" ) {
            alert("Syntax Error");
        }else if (display.value == "/" ) {
            alert("Syntax Error");
        }else {
            document.forms.display.value = 
            eval(document.forms.display.value)
        }
    });
    

});
