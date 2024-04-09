$(document).ready(function(){
    $('header button').click(function (){
        $('.list').slideDown()
    })

    $('#limpa').click(function(){
        $('.list').slideUp()
    })
})