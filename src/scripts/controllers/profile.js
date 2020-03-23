import profileView from '../views/profile.art'
// import { clearInterval } from 'timers'
import { SSL_OP_COOKIE_EXCHANGE } from 'constants'

class profile {
    render() {
        let html = profileView({})
        $('#root').html(html)
        $('header').html('猫眼电影')
        $('.back_e').on('tap', function() {
            location.hash = 'cinime';
        })
        $('#z_login').on('tap', function() {
            $(".register_inp_wrap").css('display', 'none')
            $('.login_inp_wrap').css('display', 'block')
            $('.lbtn button').css({ 'background': '#df2d2d', 'color': "#fff" })
        })
        $('.register_inp_1 input').on('input', function() {
            var val = $(this).val();
            if (/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(val)) {
                $('.lbtn button').css({ 'background': '#df2d2d', 'color': "#fff" })
                $('.lbtn button').removeAttr('disabled');
                $('.register_inp input').removeAttr('disabled');
            } else {
                $('.lbtn button').css({ 'background': '#999', 'color': "#666" })
                $('.lbtn button').attr('disabled', 'true');
                $('.register_inp input').attr('disabled', 'true');
            }
            console.log();
        })
        $('#p_login').on('tap', function() {
            $('.login_inp_wrap').css('display', 'none')
            $(".register_inp_wrap").css('display', 'block')
            $('.lbtn button').css({ 'background': '#999', 'color': "#666" })
        })
        $('header').on('tap', function() {
            location.hash = '#movie';
        })
        $('.register').on('tap', function() {
            location.hash = $(this).attr('data-nm')
        })
        $('.register_inp_1 button').on('tap', function() {
            $(this).attr('disabled', 'true');
            let time = 59;
            let settime = setInterval(function() {
                $('.register_inp_1 button').text(time-- + 's')
                if (time < -1) {
                    $('.register_inp_1 button').text('请再次获取验证码')
                    clearInterval(settime);
                }
                console.log(123);
            }, 100);
            /* 
            time = 59; */
        })
        $('.lbtn button').on('tap', function() {
            if ($('.register_inp_1 input').val() == $.fn.cookie('phone')) {
                location.hash = '#success'
            }
        })

    }
}
export default new profile();