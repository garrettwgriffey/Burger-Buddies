$(document).ready(() => {
    console.log("jquery is loaded");

$(".burger-btn").on("click", function(){
    const id = $(this).val();
    $.ajax({
        method:"PUT", 
        url:"/api/burger/" + id
    }).then(res => {
        console.log(res);
        location.reload();
    });
});
});