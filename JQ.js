// $("button").click(func1);
// function func1(){
//     $("#img1").css('width','1000px');
// }

// $("button").click(function(){
//     $("#img1").css('width','500px');
// })

//Use ready() to make a function available after the document is loaded:
// $("document").ready(function() {
//     $("button").click(function(){
//         $("#img1").css('width','500px');
//     })
// })

//double click
// $("document").ready(function() {
//     $("button").dblclick(function(){
//         $("#img1").css('width','500px');
//     })
// })

//mouse enter & mouse leave
$("document").ready(function(){
    // $("#img1").mouseenter(function(){
    //     $("#img1").css('width','500px');
    // });
    // $("#img1").mouseleave(function(){
    //     $("#img1").css('width','250px');
    // });  
    $("#img1").hover(func1, func2)
    function func1()
    {
        $("#img1").css('width','500px');
    }
    function func2()
    {
        $("#img1").css('width','250px')
    }
})