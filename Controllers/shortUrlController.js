function crunch(number){
    const base62Chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encoded=''

    if(number === 0){
        return base62Chars[0]
    }

    while(number>0){
        encoded = base62Chars[number%62]+encoded
        number = Math.floor(number/62)
    }

    return encoded
}

module.exports = crunch; 
