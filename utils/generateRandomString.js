function generateRandomString(count) {
    var ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = ALPHA_NUMERIC_STRING.length;
    var rand = '';
    for (var i = 0; i < count; i++) {
        var start = Math.floor(Math.random() * charactersLength) + 1;
        rand += ALPHA_NUMERIC_STRING.substr(start, 1);
    }
    return rand;
}
module.exports = generateRandomString;