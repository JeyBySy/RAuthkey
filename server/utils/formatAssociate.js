const formatAssociate = (associate) => {
    const formattedName = associate.replace(/[aeiou]/gi, '').toUpperCase();
    projectAssociate = formattedName.replace(/\s+/g, '')
    return projectAssociate;
}

module.exports = {
    formatAssociate
}