module.exports = {
    getsearch({ key }) {
        return $.ajax({
            url: `/api/ajax/search?kw=${key}&cityId=133&stype=-1`,
        });
    }
}