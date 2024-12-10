const express = require('express');
const CryptoJS = require("crypto-js");
const router = express.Router();
const users = require('../models/user');

// Логін користувача
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);
    if (user) {
        const decryptedPassword = CryptoJS.AES.decrypt(user.password, "secret_key").toString(CryptoJS.enc.Utf8);
        if (decryptedPassword === password) {
            res.json({ id: user.id, email: user.email }); // Відправляємо ID та email користувача
        } else {
            res.status(401).json({ message: "Невірні дані для входу" });
        }
    } else {
        res.status(401).json({ message: "Користувача не знайдено" });
    }
});

// Реєстрація користувача
router.post("/register", (req, res) => {
    const { email, password, firstName, lastName, phone } = req.body;

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "Користувач з таким email вже існує" });
    }

    const newUser = {
        id: (users.length + 1).toString(),
        email,
        password: CryptoJS.AES.encrypt(password, "secret_key").toString(),
        firstName,
        lastName,
        phone,
    };

    users.push(newUser);
    res.status(201).json({ id: newUser.id, message: "Користувача успішно зареєстровано" });
});

module.exports = router; 