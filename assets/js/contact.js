(function ($) {
    // loading after
    window.onload = function () {
        jQuery.validator.addMethod("password", function (value, element) {
            return this.optional(element) || /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
        }, "8文字以上の英数字を入力してください");

        //config rules
        $(".complete_email.normal #complete_email_section form").validate({
            rules: {
                business_type: {
                    required: true
                },
                business_form: {
                    required: true
                },
                post_code: {
                    required: true
                },
                district: {
                    required: true,
                },
                phone_num: {
                    digits: true,
                    required: true
                },
            },
            messages: {
                business_type: {
                    required: "主事業種類を入力してください。",
                },
                business_form: {
                    required: "事業形態を入力してください。",
                },
                post_code: {
                    required: "郵便番号（ハイフン不要）を入力してください。",
                },
                district: {
                    required: "都道府県を入力してください。"
                },
                phone_num: {
                    required: "電話番号（ハイフン不要）を入力してください。",
                    digits: "入力フォーマットが違います"
                },
            },
            errorPlacement: function (error, element) {
                if ($(error).attr('id') == 'policy-error') {
                    error.insertAfter($('.agree'));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element, errorClass) {
                $(element).closest('.input').addClass('has-error');
            },
            unhighlight: function (element, errorClass) {
                $(element).closest('.input').removeClass('has-error');
            },

        });

        $(".complete_email.authentication #complete_email_section form").validate({
            rules: {
                district: {
                    required: true,
                },
                phone_num: {
                    digits: true,
                    required: true
                },
                company_name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                district: {
                    required: "都道府県を入力してください。"
                },
                phone_num: {
                    required: "電話番号（ハイフン不要）を入力してください。",
                    digits: "入力フォーマットが違います"
                },
                company_name: {
                    required: "屋号名・会社名を入力してください。",
                },
                email: {
                    email: "有効なメールアドレスを入力してください。",
                    required: "メールアドレスを入力してください"
                }
            },
            errorPlacement: function (error, element) {
                if ($(error).attr('id') == 'policy-error') {
                    error.insertAfter($('.agree'));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element, errorClass) {
                $(element).closest('.input').addClass('has-error');
            },
            unhighlight: function (element, errorClass) {
                $(element).closest('.input').removeClass('has-error');
            },
        });

        $(".user_login #main_content form").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    password: true,
                    required: true,
                }
            },
            messages: {
                email: {
                    email: "有効なメールアドレスを入力してください。",
                    required: "メールアドレスを入力してください"
                },
                password: {
                    required: "パスワードを入力してください",
                }
            },
            highlight: function (element, errorClass) {
                $(element).closest('.input').addClass('has-error');
            },
            unhighlight: function (element, errorClass) {
                $(element).closest('.input').removeClass('has-error');
            },

        });

        $(".new_review_register #main_content form").validate({
            rules: {
                best_point: {
                    required: true,
                },
                public_subsidy: {
                    required: true,
                },
                review_title: {
                    required: true
                },
                review_content: {
                    required: true
                },
            },
            messages: {
                best_point: {
                    required: "一番良かったポイントを入力してください。"
                },
                public_subsidy: {
                    required: "公的支援金（助成金・補助金）を入力してください。"
                },
                review_title: {
                    required: "レビュータイトルを入力してください。",
                },
                review_content: {
                    required: "レビュータイトルを入力してください。",
                },
            },
            errorPlacement: function (error, element) {
                if ($(error).attr('id') == 'best_point-error') {
                    error.insertAfter($('.checkbox_group'));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element, errorClass) {
                console.log(1);
                $(element).closest('.input').addClass('has-error');
            },
            unhighlight: function (element, errorClass) {
                $(element).closest('.input').removeClass('has-error');
            },
        });

        $(".member_registration #main_content form").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    password: true,
                    required: true,
                },
                confirm_password: {
                    required: true,
                    equalTo: 'password'
                },
                policy: {
                    required: true,
                }
            },
            messages: {
                email: {
                    email: "有効なメールアドレスを入力してください",
                    required: "メールアドレスを入力してください"
                },
                password: {
                    required: "パスワードを入力してください",
                },
                confirm_password: {
                    required: 'パスワード（確認用）を入力してください',
                    equalTo: '同じパスワードを入力してください'
                },
                policy: {
                    required: '当社の利用規約とサービスに同意してください',
                }
            },
            errorPlacement: function (error, element) {
                if ($(error).attr('id') == 'policy-error') {
                    error.insertAfter($('.agree'));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element, errorClass) {
                $(element).closest('.input').addClass('has-error');
            },
            unhighlight: function (element, errorClass) {
                $(element).closest('.input').removeClass('has-error');
            },

        });

        $(".forgot_password #main_content form").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                email: {
                    email: "有効なメールアドレスを入力してください",
                    required: "メールアドレスを入力してください"
                },
            },
            highlight: function (element, errorClass) {
                $(element).closest('.input').addClass('has-error');
            },
            unhighlight: function (element, errorClass) {
                $(element).closest('.input').removeClass('has-error');
            },

        });

        // on click for submit button in form
        $("#complete_email_section .form_submit button[type='submit']").on('click', function (e) {
            e.preventDefault();
            if ($("#complete_email_section form").valid()) {
                // do something
            }
            else {
                $(".error").each(function () {
                    if ($(this).text() != '') {
                        $('html, body').animate({
                            scrollTop: $(this).parents('.item_contact').offset().top - 100
                        }, 1000);
                    }
                    return false;
                });
            }
        });

        $(".user_login .form_wrapper button[type='submit']").on('click', function (e) {
            e.preventDefault();
            if ($(".user_login #main_content form").valid()) {
                // do something
            }
            else {
                $(".error").each(function () {
                    if ($(this).text() != '') {
                        $('html, body').animate({
                            scrollTop: $(this).parents('.item_contact').offset().top - 100
                        }, 1000);
                    }
                    return false;
                });
            }
        });

        $(".new_review_register .form_wrapper button[type='submit']").on('click', function (e) {
            e.preventDefault();
            if ($(".new_review_register #main_content form").valid()) {
                // do something
            }
            else {
                $(".error").each(function () {
                    if ($(this).text() != '') {
                        $('html, body').animate({
                            scrollTop: $(this).parents('.item_contact').offset().top - 100
                        }, 1000);
                    }
                    return false;
                });
            }
        });

        $(".member_registration .form_wrapper button[type='submit']").on('click', function (e) {
            e.preventDefault();
            if ($(".member_registration #main_content form").valid()) {
                // do something
            }
            else {
                $(".error").each(function () {
                    if ($(this).text() != '') {
                        $('html, body').animate({
                            scrollTop: $(this).parents('.item_contact').offset().top - 100
                        }, 1000);
                    }
                    return false;
                });
            }
        });

        $(".forgot_password .form_wrapper button[type='submit']").on('click', function (e) {
            e.preventDefault();
            if ($(".forgot_password #main_content form").valid()) {
                // do something
            }
            else {
                $(".error").each(function () {
                    if ($(this).text() != '') {
                        $('html, body').animate({
                            scrollTop: $(this).parents('.item_contact').offset().top - 100
                        }, 1000);
                    }
                    return false;
                });
            }
        });

        $('.complete_email .required input, .complete_email .required select').on('input', function () {
            let listValue = [];
            $('.required input, .required select').each(function () {
                listValue.push($(this).val());
            });
            const policy = $('.form_submit input:checked');
            const check = listValue.includes("") || listValue.includes(null) || policy.length == 0;
            if (!check) {
                $('.form_submit button[type="submit"]').removeClass('disable');
                $('.form_submit button[type="submit"]').attr('disabled', false);
            } else {
                $('.form_submit button[type="submit"]').addClass('disable');
                $('.form_submit button[type="submit"]').attr('disabled', true);
            }
        });

        $('.select_item select').on('change', function () {
            if ($(this).val() === "") {
                $(this).css('color', '#BAD7EB');
            } else {
                $(this).css('color', '#37434C');
            }
        });

        $('.autofill').on('click', function (e) {
            e.preventDefault();
            AjaxZip3.zip2addr('post_code', '', 'urban', 'urban');
        });

    };

})(jQuery);

