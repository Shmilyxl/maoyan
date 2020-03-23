import successView from '../views/success.art'
class success {
    bindClick() {
        // 页面切换
        location.hash = $(this).attr('data-to')
    }

    render() {
        let html = successView({});
        $('#root').html(html)
        $('footer li').on('click', this.bindClick)
    }
}

export default new success()