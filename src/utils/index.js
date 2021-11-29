const movieArr = [];

class Movie {
    constructor(title, actor, date) {
        this.title = title;
        this.actor = actor;
        this.date = date;
    }

    add() {
        movieArr.push(this)
    }
}

module.exports = {Movie, movieArr}