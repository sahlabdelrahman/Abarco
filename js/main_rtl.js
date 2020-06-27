$(document).ready(function () {
    // Change content when click on submit_form_signin
    $(".submit_form_signin").click('on', function (e) {
        e.preventDefault();
        $('#my_account .change_text').text("ادخال كود التأكيد");
        $('#my_account .change_palceholder').attr("placeholder", "كود التأكيد");
        $('#my_account .send_again').css('display', 'flex');
        $(this).text("تسجيل دخول");
    });

    // Change content when click on submit_form_register
    $(".submit_form_register").click('on', function (e) {
        e.preventDefault();
        $('#client_register .change_text').text("ادخال كود التأكيد");
        $('#client_register .change_palceholder').attr("placeholder", "كود التأكيد");
        $('#client_register .send_again').css('display', 'flex');
        $(this).text("ادخال الكود");
    });
});