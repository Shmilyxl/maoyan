import advertiseView from '../views/advertise.art'
import layoutView from '../views/layout.art'


class detail {
    render() {
        let html = advertiseView({});
        $('#root').html(html)
    }
}
export default new detail();