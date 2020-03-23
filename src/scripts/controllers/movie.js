const BScroll = require('better-scroll')
import movieView from '../views/movie.art'
import moveListView from '../views/movie-list.art'
import movieModel from '../models/movie'
import moviecoming from '../models/movie_coming'
import moviecomingView from '../views/coming_movie.art'
import comingModel from '../models/coming'
//先引入index渲染空壳子
import index from './index'
//  import BScroll from 'better-scroll'
class movie {
    /*constructor() {
          this.render()
      } */
    renderer(list, bScroll) {
        let movieListHtml = moveListView({
            list
        })
        $('.list').html(movieListHtml)
    }
    rendererer(list) {
        let moviecomingView = moveListView({
            list
        })
        $('.comingmovie_wrap ul').html(moviecomingView)
    }
    setClick() {
        $(this).addClass('hover_item').siblings().removeClass('hover_item');
    }
    async render() {
        //先渲染index
        index.render();
        // 把PositionView 先装填到main里
        let result = await movieModel.get();
        /*     let coming = await moviecoming.getcoming();
            let data = await comingModel.getcoming(); */
        // console.log(data);
        let that = this;
        $('header').html('猫眼电影')
        let html = movieView({})
        let $main = $('main')
        $main.html(html)
            // 再把list装到ul里
            // console.log(result)
        let list = this.list = result.movieList
        this.renderer(list);

        let bScroll = new BScroll.default($('.list_wrap').get(0), {
                probeType: 2
            })
            //拼接接口
        var url = [];
        var str1 = '';
        $(result.movieIds).each(function(i, val) {
            if (i >= 12 & i <= 21) {
                str1 += '%2c' + val;
            }
        })
        str1 = str1.replace(/%2c/, '');
        url.push(str1);
        var str2 = '';
        $(result.movieIds).each(function(i, val) {
            if (i >= 22 & i <= 31) {
                str2 += '%2c' + val;
            }
        })
        str2 = str2.replace(/%2c/, '');
        url.push(str2);
        var str3 = '';
        $(result.movieIds).each(function(i, val) {
            if (i >= 32 & i <= 41) {
                str3 += '%2c' + val;
            }
        })
        str3 = str3.replace(/%2c/, '');
        url.push(str3);
        var str4 = '';
        $(result.movieIds).each(function(i, val) {
            if (i >= 42 & i <= 51) {
                str4 += '%2c' + val;
            }
        })
        str4 = str4.replace(/%2c/, '');
        url.push(str4);
        var str5 = '';
        $(result.movieIds).each(function(i, val) {
            if (i >= 52 & i <= 64) {
                str5 += '%2c' + val;
            }
        })
        str5 = str5.replace(/%2c/, '');
        url.push(str5);
        console.log(url);

        //上拉隐藏广告
        bScroll.on("scroll", function() {
                if (this.y < -90) {
                    $('#download-header').css("display", 'none')
                    $('.down_tip').css('display', 'block')
                } else {
                    $('#download-header').css("display", 'block')
                    $('.down_tip').css('display', 'none')
                }
            })
            //上拉加载更多
        var i = 0;
        bScroll.on('scrollEnd', async function() {
            console.log(this.y, this.maxScrollY);
            if (this.maxScrollY >= this.y) {
                let coming = await moviecoming.getcoming({ movieid: url[i], });
                let list = coming.coming
                that.list = [...that.list, ...list]
                that.renderer(that.list, bScroll)
            }
            if (i < 5) {
                i++;
            }
        })
        $('.hot-item').on('click', this.setClick)
        $('#n_hot').on('tap', function() {
            location.hash = '#movie'
            $('.list').css('display', 'block');
            $('.c-list').css('display', 'none')
        })
        $('#f_hot').on('click', function() {
            location.hash = '#coming'
            $('.list').css('display', 'none');
            $('.c-list').css('display', 'block')
        })
        $('.list_item').on('tap', function() {
            let id = $(this).attr('data-id')
            console.log(id);
            location.hash = `detail/${id}`;
        })
        $('.city-entry').on('tap', function() {
            let city = $(this).attr('data-index')
                // console.log(city);
            location.hash = city;
        })
        $('.search-entry').on('tap', function() {
            location.hash = $(this).attr('data-type')
        })
        $('.download-header').on('tap', function() {
            location.hash = $(this).attr('data-download')
        })
        $('.down_tip').on('tap', function() {
            location.hash = $(this).attr('data-download')
        })
        $('.city-name').html($.fn.cookie('citynm'))
    }
}

export default new movie()