// 1. Boston is missing!
//    Use jQuery to remove the .hidden class from Boston
$('li').removeClass('hidden');

// 2. Hard to read background!
//    Use jQuery to change the background color to white
$("body").css("background-color", "grey");

// 3. Where is New York?
//    Use jQuery to add an <li> with New York to the end of list

$('ul').append('<li>New York</li>');

// 4. User wants to add Medina!
//    Use jQuery to get the value from the input 
//    And add an <li> with the value to the end of list
let city =  $("input").val()
$('ul').append("<li>"+city+"</li>")

/*
if we want to add the input to the list 
after pressing the button 
*/
function addToList(event){
    event.preventDefault();//stop refresh the page 
    let city =  $("input").val()
    $('ul').append("<li>"+city+"</li>")  
    $("input:first-child").val("")//set the value to empty 
}
$("form").on("submit", addToList)

// 5. Goodbye Tom Cruise
//    Use jQuery to replace the <img> src with 'https://bit.ly/2R6fTng' 
$('img').attr('src', 'https://bit.ly/2R6fTng')

$('li').on("click", function (event){
    $(event.target).remove();
})