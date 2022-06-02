const nodemailer = require('nodemailer');
const express = require("express");
const app = express();

app.get("/mail", function (req, res) {
    const firstname = String(cleanString(req.query.firstname));
    const lastname = String(cleanString(req.query.lastname));
    const email = String(cleanString(req.query.email));
    const message = String(escapeHtml(req.query.message));

    if (
        firstname.length === 0 ||
        lastname.length === 0 ||
        email.length === 0 ||
        message.length === 0
    ) {
        res.json({ error: 'Veuillez remplir l\'ensemble des champs' });
        return;
    }

    //check firstname length
    if (firstname.length < 3 || firstname.length > 40) {
        res.json({ error: 'Votre prénom doit comprendre entre 3 et 40 caractères' });
        return;
    }

    //check for only letters
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ -]+$/.test(firstname)) {
        res.json({ error: 'Votre prénom doit contenir uniquement des lettres' });
        return;
    }

    //check lastname length
    if (lastname.length < 3 || lastname.length > 50) {
        res.json({ error: 'Votre nom doit comprendre entre 3 et 50 caractères' });
        return;
    }

    //check for only letters
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ -]+$/.test(lastname)) {
        res.json({ error: 'Votre nom doit contenir uniquement des lettres' });
        return;
    }

    //check email
    if (!isEmailValid(email)) {
        res.json({ error: 'Votre email est incorrect' });
        return;
    }

    //check message length
    if (message.length < 10 || message.length > 700) {
        res.json({ error: 'Votre message doit comprendre entre 10 et 700 caractères' });
        return;
    }

    //verif passed -> send email
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, '0'),
        mm = String(today.getMonth() + 1).padStart(2, '0'),
        yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy + ' à ' + today.getHours() + 'h' + today.getMinutes();

    let transporter = nodemailer.createTransport({
        host: 'mailhog',
        port: 1025,
    })

    let mail = {
        from: email,
        to: "test@mailhog.local",
        subject: "Mail de contact de " + capitalize(firstname) + " " + capitalize(lastname) + " | " + today,
        html: '<p>' + message + '</p>'
    }

    transporter.sendMail(mail, function (err, info) {
        if (err) {
            res.json({ error: 'Erreur lors de l\'envoi du mail :(' })
        } else {
            res.json({ valid: 'Mail envoyé, je vous répondrai dès que possible' })
        }
    })
});

module.exports = app

function cleanString(text) {
    let cleanString = String(text)
        .trim()
        .toLowerCase()
        .replace(/\\(.)/mg, "$1");

    return escapeHtml(cleanString);
}

function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

function isEmailValid(email) {
    const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email)
        return false;

    if (email.length > 254)
        return false;

    var valid = emailRegex.test(email);
    if (!valid)
        return false;

    var parts = email.split("@");
    if (parts[0].length > 64)
        return false;

    var domainParts = parts[1].split(".");
    if (domainParts.some(function (part) { return part.length > 63; }))
        return false;

    return true;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}