const jwt = require('jsonwebtoken');
// ===========
// verificar token
// =======

let verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token no valido'
                }
            })
        }

        req.usuario = decoded.usuario;

        console.log(decoded.usuario);
        console.log(req.usuario);
        next();
    })

};

// ===========
// verificar admin role
// =======

let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario;

    //console.log(req);

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es ADM'
            }
        })
    }

};

module.exports = {
    verificaToken,
    verificaAdminRole
}