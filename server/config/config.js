/// ===============
/// puerto
/// ===============

process.env.PORT = process.env.PORT || 3000;

/// ===============
/// entorno
/// ===============

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

/// ===============
/// vencimiento del token
/// ===============

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

/// ===============
/// SEED authenticacion
/// ===============

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

/// ===============
/// base de datos
/// ===============

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

/// ===============
/// google client id
/// ===============

process.env.CLIENT_ID = process.env.CLIENT_ID || '923435913258-lj08gqe316kcj7385i2ftoji1hg173vk.apps.googleusercontent.com'