const hapi = require('hapi');
const mongoose = require('mongoose');

const Image = require('./models/Image');

const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async () => {

    server.route([{
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            return `<h1>HAPI API</h1>`;
        }
    }, {
        method: 'GET',
        path: '/api/v1/image',
        handler: function (req, reply) {
            return Image.find();
        }
    }, {
        method: 'GET',
        path: '/api/v1/image/{id}',
        handler: function (req, reply) {
            return Image.findById(req.params.id);
        }
    }, {
        method: 'POST',
        path: '/api/v1/image',
        handler: function (req, reply) {
            const {
                startdate,
                fullstartdate,
                enddate,
                url,
                urlbase,
                copyright,
                copyrightlink,
                quiz,
                wp,
                hsh,
                drk,
                top,
                bot,
                hs
            } = req.payload;
            const image = new Image({
                startdate,
                fullstartdate,
                enddate,
                url,
                urlbase,
                copyright,
                copyrightlink,
                quiz,
                wp,
                hsh,
                drk,
                top,
                bot,
                hs
            });
            return image.save();
        }
    }, {
        method: 'DELETE',
        path: '/api/v1/image/{id}',
        handler: function (req, reply) {
            return Image.deleteOne({_id:req.params.id});
        }
    }
]);

    await server.start();
    console.log(`Sunucu çalışıyor: ${server.info.uri}`);
};

mongoose.connect('mongodb://yakup:yakup123@ds016098.mlab.com:16098/pocket-api');

mongoose.connection.once('open', () => {
    console.log('Veritabanına bağlandı.')
})

init();