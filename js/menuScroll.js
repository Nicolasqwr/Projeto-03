$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;
 
        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    })
    $('.btn1').click(function(){
        var offsetbutton = (3000)

        $('html,body').animate({'scrollTop':offsetbutton});

    })

    $('#btn2').click(function(){
        alert('Enviado com sucesso!')
    })
})