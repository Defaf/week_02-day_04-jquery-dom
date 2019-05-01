// 1.  Add a click event to button that toggle show/hide of list
function btnToggle(){
    $('ul').toggle();
}
$('button').click(btnToggle);
// 2.  Add a submit event to add-list-item form that adds user input to list

    // prevent the form from refreshing page

    // select input field
    // get value that user entered

    // add the user input as an li to the list

$('button').click(function (event){
    event.preventDefault();//stop refresh the page 
    let city =  $("#new-list-item").val();
    $('ul').append("<li>"+city+"</li>")  ;
    $("#new-list-item:first-child").val("");
});



// 3.  Add a submit event to update-image form that updates image src

    // prevent the page from refreshing

    // select the input 
    // get the value from user

    // update the image src with user input

$('button').click(function (event){
    event.preventDefault();//stop refresh the page 
    let imgIcon =  $("#new-image").val();
    $('img').attr("src",imgIcon )  ;
});
    

// 4.  BONUS: Look up `event.target` and use it so that
//     when a user clicks on a list item
//     it changes just that list item to red
$('li').on("click",function(event){
    $(event.target).css("color","red");
})