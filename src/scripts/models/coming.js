module.exports = {
    getcom({}) {
        return $.ajax({
            url: `/api/ajax/mostExpected?ci=30&limit=10&offset=10&token=`
        });
    }
}