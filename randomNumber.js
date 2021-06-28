module.exports = function randomNumberBetween(max, min = 0, excluded = -1) {
    let num = Math.floor(Math.random() * (max - min + 1) + min)
    return (num === excluded) ? randomNumberBetween(max,min,excluded) : num

}


