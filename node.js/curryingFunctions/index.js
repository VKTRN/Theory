let dragon = name => size => element =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!';

let fluffykins        = dragon('fluffykins')
let tinyFluffykins    = fluffykins('tiny')
let tinyIceFluffykins = tinyFluffykins('ice')

console.log(tinyIceFluffykins);
