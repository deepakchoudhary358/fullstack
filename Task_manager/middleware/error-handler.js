const errorhandlerMiddleware = (err, req, res, next) => {
    console.log(`err.... : ${err}`)
    return res.status(404).json({msg: err.message});
}

module.exports = errorhandlerMiddleware;