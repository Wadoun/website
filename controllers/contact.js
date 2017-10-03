'use strict';

const email = require('./mailer');

function getContactInfos(req) {
    if (!req || !req.body) return null;

    const infos = {};
    if (req.body.email) infos.email = req.body.email;
    if (req.body.name) infos.name = req.body.name;
    if (req.body.phone) infos.phone = req.body.phone;
    if (req.body.message) infos.message = req.body.message;

    return infos;
}

function sendContactMail(infos) {
    return new Promise( (resolve, reject) => {
        email.sendMail({
            from: '"' + infos.name + ' " <' + infos.email + '>', // sender address
            to: 'info@tripsylon.com', // list of receivers
            subject: 'New message from Tripsylon website', // Subject line
            text: infos.message,
            html: infos.message + '<br/><br/>Contact : <br/>Phone: ' + infos.phone + '<br/>Email: ' + infos.email + '<br/>Name: ' + infos.name
        }, (err, res) => {
            if(err){
                return reject(error);
            }
            return resolve();
        })
    });
    
}

module.exports.getContactInfos = getContactInfos;
module.exports.sendContactMail = sendContactMail;