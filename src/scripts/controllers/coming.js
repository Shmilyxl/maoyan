import advertiseView from '../views/coming_movie.art'
import coming_movieModel from '../models/willmov'
class coming {
    async render() {
        let result = await coming_movieModel.getwill()
        let list = result.coming
        console.log(list);
        let html = advertiseView({ list });
        $('.c-list').html(html)
    }
}
export default new coming();