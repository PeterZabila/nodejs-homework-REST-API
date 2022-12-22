const { RequestError } = require("../../helpers");
const {User} = require("../../models/user")

const logout = async(req, res) => {
    const {_id} = req.user;

    if(!_id) {
        throw RequestError(401, "Not authorized")
    }

    await User.findByIdAndUpdate(_id, {token: ""});

    res.json({
        message: "Bearer {{token}}"
    })

}

module.exports = logout;