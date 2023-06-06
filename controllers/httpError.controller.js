// Funcion para controlar el NOT FOUND
export const error404 = (req, res) => {
    console.error("NOT FOUND 404");
    res.status(404).render('not-found', {
        errorCode: 404,
    });
};

// Funcion para manejar otros errores 
export const handleOther = (err, req, res, next) => {
    console.error("ERROR 505");
    res.status(500).render('not-found', {
        errorCode: 500,
    });
}