$(document).ready(function(){
    $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        alert(form_data);

        $(this).find('input.necessarily, textarea.necessarily').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
            if ($(this).val() == '') { // eсли нaхoдим пустoe
                $(this).addClass('input--error'); // гoвoрим зaпoлняй!
                $(this).closest('.form__block').find('.form__validation').addClass('form__validation--visible');
                error = true; // oшибкa
            } else {
                $(this).removeClass('input--error');
                $(this).closest('.form__block').find('.form__validation').removeClass('form__validation--visible');
            }
        });

        $.ajax({
            type: "POST", //Метод отправки
            url: "mail.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                //код в этом блоке выполняется при успешной отправке сообщения
                alert("Ваше сообщение отпрвлено!");
            }
        });
    });
});
