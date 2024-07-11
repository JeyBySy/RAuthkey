const db = require('../../models');
const { user_master_tbl } = db
const bcrypt = require('bcrypt');

// Adding the user object to req.user if valid
const BasicAuth = async (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return [false, { "status": 401, "message": "Invalid credentials" }]
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    try {
        const user = await user_master_tbl.findOne({ where: { user_username: username, is_superuser: true } });
        console.log(user);

        if (!user || !(await bcrypt.compare(password, user.user_password))) {
            return [false, { "status": 401, "message": "Invalid credentials" }];
        }
        req.user = user
        return [true, null]
    } catch (error) {
        console.error(error);
        return [false, { "status": 500, "message": 'An error occurred while authenticating' }];
    }
}


module.exports = {
    BasicAuth
}