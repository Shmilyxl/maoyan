module.exports = {
    getcndetail({ id }) {
        return $.ajax({
            url: `/api/ajax/cinemaDetail?cinemaId=${id}`,
        });
    }
}