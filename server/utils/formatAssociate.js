const formatAssociate = (associate) => {
    const formattedName = associate.replace(/[aeiou]/gi, '').toUpperCase();
    return formattedName;
}

module.exports = {
    formatAssociate
}