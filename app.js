$(".txtb").on("keyup",function(e){
    if(e.keyCode == 13 && $(".txtb").val() !="")
    {
        var task = $("<div class = 'task'></div>").text($(".txtb").val()); 
        //remove the todo one the user clicks on trash can 
        var del = $("<i class = 'fas fa-trash-alt'></i>").click(function(){
           var p = $(this).parent(); 
           p.fadeOut(function(){
               p.remove();
           });
        }); 

        //move the todo item to the completed section once user clicks on the check mark
        //Also remove item from Not completed section
        var check = $("<i class = 'fas fa-check'></i>").click(function(){
            var p = $(this).parent(); 
            p.fadeOut(function(){
                $(".comp").append(p);
                p.fadeIn();
             });
           $(this).remove();  
        }); 

        task.append(del, check);
        $(".notcomp").append(task);
        
    //to clear the textbox
    $(".txtb").val("");
    }
});