(function ($) {
    // loading after
    window.onload = function () {
        $("#complete_email_section form").validate({
            rules:{
                business_type:{
                    required:true
                },
                business_form:{
                    required:true
                },
                post_code:{
                    required:true
                },
                district: {
                    required: true,
                },
                phone_num: {
                    digits: true,
                    required: true
                },
            },
            messages:{
                business_type:{
                    required:"主事業種類を入力してください。",
                },
                business_form: {
                    required: "事業形態を入力してください。",
                },
                post_code:{
                    required:"郵便番号（ハイフン不要）を入力してください。",
                },
                district: {
                    required: "都道府県を入力してください。"
                },
                phone_num:{
                    required:"電話番号（ハイフン不要）を入力してください。",
                    digits:"入力フォーマットが違います"
                },
            },
            highlight: function (element, errorClass) {
                $(element).closest('.input').addClass('has-error');
            },
            unhighlight: function (element, errorClass) {
                $(element).closest('.input').removeClass('has-error');
            },

        });
        $("#complete_email_section #register").on('click', function (e) {
            e.preventDefault();
            if($("#complete_email_section form").valid()){
                console.log(1);
            }
            else{
                $(".error").each(function () {
                    if ($(this).text() != ''){
                        $('html, body').animate({
                            scrollTop: $(this).offset().top - 100
                        }, 1000);
                    }
                    return false;
                });
            }
        });

        $('.required input, .required select').on('input', function(){
            let listValue = [];
            $('.required input, .required select').each(function() {
                listValue.push($(this).val());
            });
            const check = listValue.includes("") || listValue.includes(null);
            if(!check){
                $('.form_submit button[type="submit"]').removeClass('disable');
                $('.form_submit button[type="submit"]').attr('disabled', false);
            } else {
                $('.form_submit button[type="submit"]').addClass('disable');
                $('.form_submit button[type="submit"]').attr('disabled', true);
            }
        });

        $('.select_item select').on('change', function() {
            if($(this).val() === "") {
                $(this).css('color','#BAD7EB');
            } else {
                $(this).css('color','#37434C');
            }
        });

        $('.autofill').on('click', function (e) {
            e.preventDefault();
            AjaxZip3.zip2addr('post_code', '', 'urban', 'urban');
        });
        
    };

})(jQuery);

