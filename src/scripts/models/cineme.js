module.exports = {
    getcn({ time }) {
        return $.ajax({
            url: `/api/ajax/cinemaList?day=${time}&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1571403841786&cityId=${$.fn.cookie("cityid")}`
        })
    }
}