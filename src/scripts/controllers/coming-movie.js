import coming_movieView from '../views/coming_movie.art'
import coming_movieModel from '../models/willmov'

class comingMovie {
    async render() {
        let html = coming_movieView({});
        $('.list').html(html)

    }
}
export default new comingMovie();