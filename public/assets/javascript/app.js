$(document).ready(function(){

  // Nav Bar Mobile Slider
  $(".button-collapse").sideNav();
  
  $('.add-comment-button').on('click', function(){

       
    var articleId = $(this).data("id");
   
    var baseURL = window.location.origin;

    var frmName = "form-add-" + articleId;
    var frm = $('#' + frmName);


    // AJAX Call to delete Comment
    $.ajax({
      url: baseURL + '/add/comment/' + articleId,
      type: 'POST',
      data: frm.serialize(),
    })
    .done(function() {
   
      location.reload();
    });
    
    // Prevent Default
    return false;

  });

  $('.delete-comment-button').on('click', function(){
   
    var commentId = $(this).data("id");
    
    var baseURL = window.location.origin;

    // AJAX Call to delete Comment
    $.ajax({
      url: baseURL + '/remove/comment/' + commentId,
      type: 'POST',
    })
    .done(function() {
      // Refresh the Window after the call is done
      location.reload();
    });
    
    // Prevent Default
    return false;

  });
  
});