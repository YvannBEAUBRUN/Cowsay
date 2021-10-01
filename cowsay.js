let cowsay = require("cowsay");
const userInfo = require('./information');

console.log(cowsay.say({
    text :(`Hi, my name is ${userInfo.name} from ${userInfo.campus} Campus`),
    e : "oO",
    T : "U "
}));

