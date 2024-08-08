const AuthClientValidator = (client, redirectURI) => {
    if (client && JSON.parse(client.redirect_uri).includes(redirectURI)) {
        return [true]
    }
    else {
        return [false, { "message": 'Invalid client_id or redirect_uri' }];
    }


}

module.exports = {
    AuthClientValidator
}