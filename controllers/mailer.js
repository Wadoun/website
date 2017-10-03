'use strict';

const nodemailer = require('nodemailer');
const config = require('../config/environments');

var transporter = nodemailer.createTransport(config.mailer);

module.exports = transporter;