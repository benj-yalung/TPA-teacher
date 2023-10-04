$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        html: true,
        content: function () {
            return $(this).next('.options-content').html();
        }
    });
});