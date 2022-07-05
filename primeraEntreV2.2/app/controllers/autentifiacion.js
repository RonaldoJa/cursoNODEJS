

export const auth = (req, res, next) => {
    const admin = true;
    if(admin){
        return next();
    } else {
        res.redirect('/api/carrito')
    }
}