function insert(number) {
    var exist = $('.result').val();
    $('.result').val(exist+number)
}


function clearresult() {
    $('.result').val('');
}

function result() {
    var finalResult = eval($('.result').val());
    $('.result').val(finalResult)
}
function del() {
    var inputedtext = $('.result').val();
    if (inputedtext != '') {
       
        $('.result').val(inputedtext.slice(0,-1))
    }
   
}

$('.onoff').click(function () {
    $('.row').fadeToggle(2000);
    $('h2').text('Your calculator Is On');
    $('.calculator').toggleClass('afteron')
})
