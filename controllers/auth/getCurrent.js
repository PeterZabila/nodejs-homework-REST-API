const getCurrent = async(req, res) => {
    const {email, subscription} = req.body;

    res.json({
        email,
        subscription
    })
}

module.exports = getCurrent;