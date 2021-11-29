// console.log(process.argv);

const { Movie, movieArr } = require("./utils") ///node will default to look in index.js so only need to put the folder

const app = (args) => {
    switch (args[2]) { /// file name?
        case "add":
            const movie = new Movie(args[3], args[4], args[5]) ///title and actor
            movie.add()
            console.log(movieArr);
            break;

        case "add multi":
            const movie1 = new Movie(args[3], args[4], args[5])
            const movie2 = new Movie(args[6], args[7], args[8])
            movie1.add()
            movie2.add()
            console.log(movieArr);
            break;

        default:
            console.log("incorrect command");
            break;
    }
}

app(process.argv)



