const User = require('../models/User');
const userstate = async (useremail, status) => {
    await User.updateOne({ email: useremail }, {
        status: status
    });
}
function arrayRemove(arr, value) {
    return arr.filter(function (ele) { return ele != value; });
}
module.exports = {
    userstate,arrayRemove
}