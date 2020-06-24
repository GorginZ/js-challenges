function getPrices(list) {
    return list.map((string) => {
        return string.subtr(string.indexOf('$') + 1, string.length - 3);
    })
    
}

// const list = ice cream etc

module.exports = {
    getPrices
};