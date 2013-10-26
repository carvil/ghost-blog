var newrelic = require('newrelic'),
    path     = require('path'),
    config;

config = {
    development: {
        url: 'http://localhost:2368',
        database: {
            client: 'postgres',
            connection: {
                host: 'localhost',
                user: 'carvil_blog',
                password: '',
                database: 'carvil_blog_development',
                port: 5432
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },

    production: {
        url: 'http://www.carlosvilhena.com',
        mail: {},
        database: {
            client: 'postgres',
            connection: {
                host: process.env.PG_HOST,
                user: process.env.PG_USER,
                password: process.env.PG_PASSWORD,
                database: process.env.PG_DATABASE,
                port: process.env.PG_PORT
            }
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    },

    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    travis: {
        url: 'http://127.0.0.1:2368',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-travis.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    }
};

module.exports = config;
