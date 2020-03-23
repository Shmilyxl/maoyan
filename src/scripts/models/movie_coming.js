module.exports = {
        getcoming({ movieid }) {
            return $.ajax({
                url: `/api/ajax/moreComingList?token=&movieIds=${movieid}`

            })
        }
    }
    //https://m.maoyan.com/ajax/moreComingList?token=&movieIds=1299838%2C905675%2C1243361%2C1178432%2C1256872%2C1211270%2C1240752%2C1242130%2C1215605%2C359377