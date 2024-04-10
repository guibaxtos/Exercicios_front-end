$(document).ready(function(){
    $('header button').click(function (){
        $('.list').slideDown()
    })



    $('#task-form').submit(function(e){
        e.preventDefault();
        const novaTarefa = $('#task').val().trim();
        if (novaTarefa !== '') {
            $('#task-list').append('<li>' + novaTarefa + '</li>')
            $('#task').val('');
        }
    })

    $('#limpa').submit(function(){
        $('#task-list').val('')
    })

})