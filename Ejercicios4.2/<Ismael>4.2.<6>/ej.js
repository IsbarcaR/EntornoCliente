$("#btnColor").click(function(){
    console.log("object");
    $("#targetDiv").css('background-color','#FF0000');
})
$('#btnText').click(function(){
    $("#targetDiv").html('hola')
})

$('#btnToggle').click(function(){
    $("#targetDiv").toggle()
})