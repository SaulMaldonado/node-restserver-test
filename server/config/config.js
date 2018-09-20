/// ===============
/// puerto
/// ===============

process.env.PORT = process.env.PORT || 3000;

/// ===============
/// entorno
/// ===============

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

/// ===============
/// base de datos
/// ===============

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:ZarahyTrezmb3+cafe-user@ds163822.mlab.com:63822/cafe';
}

process.env.URLDB = urlDB;