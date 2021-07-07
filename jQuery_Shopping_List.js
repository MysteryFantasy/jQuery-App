$('ul').on('click','li', function(){
    $(this).toggleClass('done');
});

$('ul').on('click', '.deleteFromList', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
});

$('input').keypress(function(event){
    if(event.which === 13){
        var textValue = $(this).val();
        $(this).val('');
        if(textValue !== '' && isNaN(textValue)){
            $('ul').append('<li>' + textValue + '<span class="deleteFromList"><i class="fas fa-backspace"></i></span></li>');
        }
    }
});

$('#btnHide').on('click', function(){
    $('input').fadeToggle();
});