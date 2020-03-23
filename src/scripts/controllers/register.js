import registerView from '../views/register.art'

class register {
    render() {
        let html = registerView({});
        $('.login-container').html(html);
        $('.back_').on('tap', function() {
            window.history.back(-1);
        })
        $('.res_inp_wrap input').on('input', function() {
            let val = $(this).val();
            console.log(val);
            if (/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val)) {
                $('.btn button').css('background', 'red')
                $.fn.cookie('phone', val, { expires: 7 })
            }

            $('.btn button').on('tap', function() {
                location.hash = '#profile'

            })
        })

    }


}
export default new register();