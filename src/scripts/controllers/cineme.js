import cinemaView from '../views/cineme.art'
import cinemaModule from '../models/cineme'
import cinemaListView from '../views/cinema_list.art'
class cineme {
    // constructor() {
    //     this.render()
    // }
    gettime() {
        var date = new Date();
        var iy = date.getFullYear();
        var iM = date.getMonth() + 1;
        var id = date.getDate();
        return this.toZero(iy) + '-' + this.toZero(iM) + '-' + this.toZero(id);
    }
    toZero(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }
    renderer(list) {
        let cinemaHtml = cinemaListView({
            list
        })
        $('.cineme_list_ul').html(cinemaHtml)
    }
    async render() {

        let time = (this.gettime());
        console.log(typeof(time));

        let result = await cinemaModule.getcn({ time })
        console.log(result.cinemas);
        let html = cinemaView({})
        $('main').html(html)
        $('header').html('影院')

        let list = this.list = result.cinemas;
        this.renderer(list)
        $('.city-name').html($.fn.cookie('citynm'))

        $('.cineme_item_wrap').on('tap', function() {
            console.log(123);
            let id = $(this).attr('data-id')
            location.hash = `cn_detail/${id}`
        })
        $('.img_wrap').on('tap', function() {
            location.hash = 'search'
        })
    }
}
export default new cineme();