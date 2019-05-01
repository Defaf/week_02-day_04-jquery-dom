$('#stopButton').click(redButton)
$('#slowButton').click(yellowButton)
$('#goButton').click(greenButton)


function redButton(){
    reset();
    $("#stopLight").css("backgroundColor","red");
}
function yellowButton(){
    reset();
    $("#slowLight").css("backgroundColor","yellow");
}
function greenButton(){
    reset();
    $("#goLight").css("backgroundColor","green");
}
function reset(){
    $("#stopLight").css("backgroundColor","black");
    $("#slowLight").css("backgroundColor","black");
    $("#goLight").css("backgroundColor","black");
}