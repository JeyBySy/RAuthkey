const db = require('../../models')
const User = db.UserMasterTbl

exports.get_Auth = async (req, res) => {
    res.send("Authorization");
}
exports.post_Auth = async (req, res) => {
    const { clientId, redirectUrl } = req.body
    res.status(200).json({ clientId, redirectUrl });
}