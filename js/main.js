
$( document ).ready(function() {
    $.ajax({url: "http://174.138.121.172/category/allCategories", success: function(result){
        var list = '';
        for(var i in result.data){
            list+= '<div class="image-container">'+
                        '<div class="image-wrapper">'+
                        '</div>'+
                    '</div>'+
                '<div class="image-details">'+
            '<div class="tittle"> '+result.data[i].categoryId +'</div>'+
            '<div class="shortdesc">'+ result.data[i].categoryName +'</div>'+
            '<div class="longdesc">'+ result.data[i].category+'</div>'+
            '<div class="tittle"></div>'+
            '</div>';
        }
    $('#mainlist').html(list);
    }});

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
        console.log('there is responsive class');
        x.className += " responsive";
    } else {
        console.log('there is navigation list');
      x.className = "header";
    }
}
