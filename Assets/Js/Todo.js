// check off specific todos by clicking
$("ul").on("click", "li", function (){
    $(this).toggleClass("completed")
    // // if li is gray
    // if ($(this).css("color") === "rgb(128, 128, 128)"){
    //     // turn it black
    //     $(this).css ({
    //         color: "black",
    //         textDecoration: "none"
    //     })
    // } 
    // // else
    // else{
    //     // turn it gray
    //     $(this).css ({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     })
    // }
    // OR YOU CAN SVAE ALL THE STRESS BY USING TOGGLE CLASS
    // I.E just adding a class to our CSS CODE
})
// clicking on X to Deletye Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    event.stopPropagation()
})
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo from text input
       var todoText = $(this).val()
    //    the code below is to remove the input that we typed after pressing entr so that it actsa a setter insteasd of a getter
       $(this).val("") 
    //    create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash '></i></span> "  + todoText + "</li>")
    }
})
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle()
})







