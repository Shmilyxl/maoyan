module.exports = {
        get() {
            return $.ajax({
                url: `/api/ajax/movieOnInfoList?token=`
                    // url: `/api/ajax.php?module=getMoreRecommendCar&city_id=12&page=2`
            })
        }
    }
    //https://m.maoyan.com/ajax/movieOnInfoList?token=