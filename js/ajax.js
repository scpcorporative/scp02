$("#contact_form").submit(function(event){
    event.preventDefault(); //prevent default action 
    var proceed = true;
    var form = this;

        //get input field values data to be sent to server
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = $(this).serialize(); //Encode form elements for submission
        
        //Ajax post data to server
        $.ajax({
            url : post_url,
            type: request_method,
            dataType : 'json',
            data : form_data
        })
        .done(function(response){ 
            if(response.type == 'error'){ //load json data from server and output message     
                output = '<div class="error">'+response.text+'</div>';
            }else{
                $(form)[0].reset(); //reset this form upon success
                output = '<div class="success">'+response.text+'</div>';
            }
            $("#contact_form #contact_results").html(output);
        });

});
