module.exports = {
    getwill() {
        return $.ajax({
            url: `/api/ajax/comingList?ci=1&token=`,
        });
    }
}