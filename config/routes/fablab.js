'use strict';

module.exports = function (app) {
    app.get('/fab-lab', (req, res) => {
        return res.render('fablab', {});
    });
}
