import cityView from '../views/city.art'
import cityModule from '../models/city'
import cityListView from '../views/cityList.art'
const BScroll = require('better-scroll')
class City {
    formatList(data, field) {
        var letter_reg = /^[A-Z]$/;
        var fin = [];
        var list = new Array();
        for (var i = 0; i < data.length; i++) {
            // 添加 # 分组，用来 存放 首字母不能 转为 大写英文的 数据
            list["#"] = new Array();
            // 首字母 转 大写英文
            var letter = data[i][field].substr(0, 1).toUpperCase();
            // 是否 大写 英文 字母
            if (!letter_reg.test(letter)) {
                letter = "#";
            }
            // 创建 字母 分组
            if (!(letter in list)) {
                list[letter] = new Array();
            }
            // 字母 分组 添加 数据
            list[letter].push(data[i]);
        }
        // 转换 格式 进行 排序；
        var resault = new Array();
        for (var key in list) {
            resault.push({
                letter: key,
                list: list[key]
            });
        }
        resault.sort(function(x, y) {
            return x.letter.charCodeAt(0) - y.letter.charCodeAt(0);
        });
        // # 号分组 放最后
        var last_arr = resault[0];
        resault.splice(0, 1);

        // 转换 数据 格式
        for (var i = 0; i < resault.length; i++) {
            var json_sort = {};
            json_sort["title"] = resault[i].letter;
            json_sort["items"] = resault[i].list;
            fin.push(json_sort);
        }

        return fin;
    }
    renderer(list, bScroll) {
        let html = cityListView({
                list
            })
            // console.log(list);
        $('.city_list').html(html)
            // console.log($('.city_list'));
    }
    async render() {
        let that = this
        let cityhtml = cityView({});
        $('#root').html(cityhtml)
        let result = await cityModule.getcity();

        let data = this.formatList(result.cts, "py");
        console.log(data);

        let list = that.list = data

        that.renderer(list)
        $('.city_nm').on('tap', function() {
            $('#city_lastest').html(` <div class="loaction_city .city_item">
         ${$(this).html()}
       </div>`)
            let c_value = $(this).html();
            console.log(c_value);
            $.fn.cookie('citynm', c_value, { expires: 7 })
            location.hash = '#movie'
                // $.fn.cookie('cityid',)
            $(data).each(function(i, v) {
                $(v.items).each(function(index, value) {
                    if (c_value === value.nm) {
                        console.log(value.id);

                        $.fn.cookie('cityid', value.id, { expires: 7 })
                    }
                })

            })
            console.log($('.nav div'));

            $('.nav div').on('tap', function() {
                console.log(123);

                console.log($(this).index());
            })
        })

    }
}


export default new City();