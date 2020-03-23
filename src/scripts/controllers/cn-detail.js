import cndetailView from '../views/cn-detail.art'
import cinemaModule from '../models/cineme'
import cndetailModel from '../models/cndetail'
import comModel from '../models/com'
import index from '../views/layout.art'
import comlistView from '../views/cn-detail-list.art'
import cndetailcView from '../views/cn-list-title.art'

class cn_detail {
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
        let comlisthtml = comlistView({
            list
        })
        console.log(list);
        $(list).each(function(i, v) {
            console.log(v);

        })
        $('.liwrap').html(comlisthtml)
    }
    rendererer(list) {
        let html = cndetailcView({ list })
        $('.movie_info').html(html)
    }
    async render() {
        let time = (this.gettime());


        let result = await cinemaModule.getcn({ time })
        let This = this;

        let list = result.cinemas
        $(list).each(async function(i, v) {
            if (location.hash.replace('#cn_detail/', '') == v.id) {
                let arr = [];
                arr.push(v);
                console.log(arr);
                console.log(location.hash.replace('#cn_detail/', ''));
                var id = location.hash.replace('#cn_detail/', '');
                let res = await cndetailModel.getcndetail({ id })
                let re = await comModel.getco({})
                console.log(re);

                $(res.cinemaData).each(async function(i, v) {
                    console.log(v);
                })
                let html = cndetailView({ res, re })
                $('#root').html(html)
                console.log(res);
                $('header').on('tap', function() {
                    location.hash = 'cinema'
                    window.location.reload()

                })
                $('.swiper-slide img').on('click', async function() {
                    var _id = $(this).attr('data-id')
                    let lis = res.showData.movies
                    $(lis).each(function(i, v) {
                        if (v.id == _id) {
                            let li = v.shows
                            This.renderer(li)
                            console.log(v);
                            This.rendererer(v)
                        }
                    })
                })

            }
        })
        setTimeout(() => {
            var mySwiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                centeredSlides: true,
            })
        }, 1000);



    }


}

export default new cn_detail()