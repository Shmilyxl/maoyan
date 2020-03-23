//显示layout
import layoutView from '../views/layout.art'

class Index {
    constructor() {
        this.render()
    }
    bindClick() {
        // 页面切换
        location.hash = $(this).attr('data-to')
    }

    render() {
        console.log(111);

        const html = layoutView({})
        document.querySelector('#root').innerHTML = html
            //绑定事件
        $('footer li').on('click', this.bindClick)
    }

}

export default new Index()