// Back-end logic
var add = function(num1, num2) {
    var num3 = parseInt(num1) + parseInt(num2);
    return num3;
};

var subtract = function(num1, num2) {
    var num3 = num1 - num2;
    return num3;
};


// Front-end logic
$(document).ready(function(){

    $("form#addition").submit(function(event){

        event.preventDefault();

        var userInputOne = $("input#userInputOne").val();

        var userInputTwo = $("input#userInputTwo").val();        

        var resultAdd = add(userInputOne, userInputTwo);

        $("p#outputAdd").text(resultAdd);
    });

    $("form#subtraction").submit(function(event){
        
        event.preventDefault();

        var userInputThree = parseInt( $("input#userInputThree").val() );

        var userInputFour = parseInt( $("input#userInputFour").val() );

        var resultSubtract = subtract(userInputThree, userInputFour);

        $("p#outputSubtract").text(resultSubtract);
    });

});




