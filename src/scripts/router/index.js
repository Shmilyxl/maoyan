import indexController from '../controllers/'
import movieController from '../controllers/movie'
import cinemeController from '../controllers/cineme'
import detailController from '../controllers/detail'
import cityController from '../controllers/city'
import searchController from '../controllers/search'
import comingMovieController from '../controllers/coming-movie'
import advertiseController from '../controllers/adverstise'
import profileController from '../controllers/profile'
import registerController from '../controllers/register'
import comingController from '../controllers/coming'
import successController from '../controllers/success'
import cn_detailController from '../controllers/cn-detail'

class Router {
    constructor() {
        this.render()
    }
    render() {
        window.addEventListener('load', this.handlePageload.bind(this))
        window.addEventListener('hashchange', this.handleHashchange.bind(this))
    }
    setActiveClass(hash) {
        $(`footer li[data-to=${hash}]`).addClass('active').siblings().removeClass('active');
    }
    renderDOM(hash) {
        let pageConstrollers = {
            movieController,
            cinemeController,
            profileController,
            indexController,
            detailController,
            cityController,
            searchController,
            advertiseController,
            registerController,
            comingController,
            successController,
            cn_detailController,
        }
        console.log(hash)
        pageConstrollers[hash + 'Controller'].render()
    }
    handlePageload() {
        //页面加载时就监听地址栏的的变化 渲染页面 保证刷新时正确
        let hash = location.hash.substr(1) || 'movie'
        indexController.render();
        let reg = new RegExp('^(\\w+)', 'g')
        let path = reg.exec(hash)
            // 初始化的时候也需要渲染DOM和设置高亮
        this.renderDOM(path[1])
        this.setActiveClass(path[1])
        location.hash = hash
            /* if (path == 'detail') {
                location.hash = hash
            } */
    }
    handleHashchange(e) {
        let hash = location.hash.substr(1)
        let reg = new RegExp('^(\\w+)', 'g')
        let path = reg.exec(hash)

        // 渲染DOM
        this.renderDOM(path[1])
            // 设置高亮
        this.setActiveClass(path[1])
    }
}

new Router()