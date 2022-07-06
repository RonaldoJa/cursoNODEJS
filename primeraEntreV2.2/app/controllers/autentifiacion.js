

export const auth = (req, res, next) => {
    const admin = true;
    if(admin){
        return next();
    } else {
        let mensajeError={
            error : "-1",
            descripcion: `ruta: ${req.url} método: ${req.method} no autorizado`
        }
        res.status(400).json(mensajeError);
    }
}