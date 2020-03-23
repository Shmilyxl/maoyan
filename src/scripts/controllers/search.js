import searchView from '../views/search.art'
import searchMoule from '../models/search'
import searchlistView from '../views/searcLiist.art'

class search {
    renderer(list) {
        let searchListHtml = searchlistView({
            list
        })
        $('.wrap').html(searchListHtml)
    }
    debounce(func, wait) {
        let timeout;
        return function() {
            let context = this;
            let args = arguments;

            if (timeout) clearTimeout(timeout);

            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait);
        }
    }
    async render() {
        let that = this
        let html = searchView({})
        $('#root').html(html)
        $('.back_').on('tap', function() {
            console.log(123);
            location.hash = 'movie';
        })
        $('.cancle').on('tap', function() {
            console.log(123);
            location.hash = 'movie';
        })
        $('.input_search input').on('input', async function() {
            var key = $(this).val();
            console.log(key);
            let result = await searchMoule.getsearch({
                key
            })
            let list = that.list = result.movies.list
            that.renderer(list)

            if (key) {
                $('.result_wrap').css('display', 'block')
                $('.search_list').css('display', 'none')
                $('.search_list').html(`<div class="index">
                <span class="history_icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAVFBMVEUAAACrq6u2traqqqqrq6utra2vr6+qqqqqqqqrq6urq6urq6urq6usrKyqqqqrq6urq6urq6urq6urq6uqqqqsrKyrq6uqqqqvr6+qqqqrq6uqqqqL2Pn/AAAAG3RSTlMA7gf3nBcL5NSxqHFJNN/IwoWDeWNQTyQgNumZiWHTAAABnklEQVRIx5SS2xKDIAxEIwJVQGu91vb//7PdyEynigL74DjiSZZNKKjVyq4tyrJoO2kbSpOYTfH+U2FmEccGT+3YIYKOt/eJbuMF5ir/V1lbtygh1OJsXfqPlTvjHt6WnDTRT3qS3v4jiOl6a9brwFm/ta0DZ8/NplQUlJKb3eeBe3ECFzNrOLfXjtTc767oQurOPf/d8v2MiMzY8D0PeRqKyuyydexTxEHBbn/zrJCLogQpJFSR14gyDSWpwb+j748qkhIl4U4QNGBfDkZROWgWOzRwQyxiT6kg9VhntJzxotNBjUazn42kdJCknzkKTDngBItEK6LROaBGPCtZXr8ckBfbsmObB1pOpcPy5YFY7Y7a73PJA5fvUcuhqjxQcayISOSBAoP4dF4GJwDDQAzrAh2g+y/ap0BwGKR/IOR8tnMfFD54X1X4qvfjCD/OPQ7hcSCAgQWA5AaWHCIfSOQvazXQWrHIGy8y1rHBOjCric0Ke9xgj9mQawTU0MkxV4O1RnkuD7mu9ILUK1kvgb129qLbq3Uv8/v78D0AP8WcS0GTLxhaAAAAAElFTkSuQmCC" alt=""></span>
                <div class="word">{key}</div>
                <span class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAASFJREFUKBV9kj2OwjAQhWPTkwppL0ADXZIGutVKHICODglWVLtUXIIOuIBvshfIj4SUKhdAossBEt7LMsFEmJGcmWTeZ09mrOI4PiqlRliLIAiu3huD9hfpNbRzTaiu66+qqv7SNB24uCRJdsgdoB/D+wQXCHKssQsmhM330FbQrcIwTBQCjycRIoyVa60/pewXkIHGa0AGr2CcsuycZKiltSBfbBhlXQB9WOUZasSeQH4kDOB8h+DqbRRFJwHEawnEQ8jyeBIhbrzhZpIX/wTajQC0hcjZ7Ra0IQArlsfuuuDmH7sQ5mQANGY3DB/aUSkkfjBDXjsZrvlHHs8u7Pv+VAP6fgcR52Wwyy7LcuJlWTZEqeFjf3dUFEUfF32GxvVumtjRa2eCUPQAAAAASUVORK5CYII=" alt=""></span>
            </div>`)
                $('.search_list').insertBefore($('.search_list'))
            }
            if (key === '') {
                $('.search_list').css('display', 'block')

            }
        })
    }
}
export default new search();