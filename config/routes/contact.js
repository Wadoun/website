'use strict';

const contactCtrl = require('../../controllers/contact');

module.exports = function (app) {
    app.post('/email', (req, res) => {

        // Retrieve contact info and send email to the contact email
        const infos = contactCtrl.getContactInfos(req);
        if (!infos) {
            // If infos is null or undefined, you might want to handle an error message or template here
        } else {
            contactCtrl.sendContactMail(infos);
        }

        return res.render('home', {});
    });
};
