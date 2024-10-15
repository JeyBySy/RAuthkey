const db = require('../../models');
const bcrypt = require('bcrypt');
const { user_master_tbl } = db
const { generateUUID4, generateRandomString } = require('../../utils/genRandomChar');
const { signToken } = require('../../utils/Jwt')
const { generateCsrfToken, validateCsrfToken } = require('../middlewares/CsrfMiddleware');



exports.index = async (req, res) => {
    res.send("RauthKey Authentication")
}
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await user_master_tbl.findOne({ where: { user_email: email } });
        if (!user) return res.json({ success: false, message: 'Invalid email or password' }); // Error if no user found

        const isMatch = await bcrypt.compare(password, user.user_password);
        if (!isMatch) return res.json({ success: false, message: 'Invalid email or password' });


        const token = signToken({ id: user.user_id, email: user.user_email, name: user.user_full_name, project_associate: user.project_associate, is_superuser: user.is_superuser });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
        });

        res.json({ success: true, access_token: token, csrfToken: req.session.csrfmiddlewaretoken });

    } catch (err) {
        console.error("Error login:", err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};