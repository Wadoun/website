'use strict';

module.exports = function (app) {
    app.get('/communaute', (req, res) => {
        return res.render('communaute', {});
    });
}
