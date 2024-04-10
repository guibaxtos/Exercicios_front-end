$(document).ready(function(){
    $('header button').click(function (){
        $('.list').slideDown()
    })

    $('#limpa').click(function(){
        $('.list').slideUp()
    })

    $('header button').on('submit',function(e){
        e.preventDefault();
        const novaTarefa = $('#task').val();
        const novoItem = $('<li></li>')
        $(novaTarefa).pushTo(novoItem)
    })
})