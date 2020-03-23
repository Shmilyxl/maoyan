module.exports = {
    getcity() {
        return $.ajax({
            url: "/api/dianying/cities.json",
        });
    }
}