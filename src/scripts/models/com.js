module.exports = {
    getco() {
        return $.ajax({
            url: "/api/ajax/mostExpected?ci=1&",
        });
    }
}