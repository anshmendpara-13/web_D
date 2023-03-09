console.log("this is module");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum = sum + element;
    });
    return sum / arr.length;
}

module.exports = {
    ave: average,
    name: "ansh",
    repo: "github"
};

module.exports.name = "ansh";
