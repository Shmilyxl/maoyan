import detailView from '../views/detail.art'
import layoutView from '../views/layout.art'
import movieModual from '../models/movie'

class detail {
    async render() {
        // let html = detailView({});

        let result = await movieModual.get({});
        console.log(result.movieList);
        let data = result.movieList;
        $(result.movieList).each(function(i, v) {
            if (location.hash.replace('#detail/', '') == v.id) {

                let arr = [];
                arr.push(v);
                console.log(arr);
                let html = detailView({ arr });
                $('#root').html(html)
            }
        })

    }

}
export default new detail();