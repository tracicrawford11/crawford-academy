const getCourses = (req, res) => {
    const db = req.app.get('db')
    db.auth.getCourses().then(response => res.status(200).json(response))
}

module.exports = {
    getCourses
}