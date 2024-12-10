const express = require('express');
const router = express.Router();
const users = require('../models/user');

// Отримати користувача за ID
router.get("/:id", (req, res) => {
	const { id } = req.params;
	const user = users.find(user => user.id === id);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ message: "User not found" });
	}
});

// Оновити дані користувача
router.put("/:id", (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, phone, avatar } = req.body;

	const userIndex = users.findIndex(user => user.id === id);
	if (userIndex === -1) {
		return res.status(404).json({ message: "User not found" });
	}

	// Оновлюємо дані користувача
	const updatedUser = { ...users[userIndex], firstName, lastName, phone, avatar };
	users[userIndex] = updatedUser;

	res.status(200).json(updatedUser);
});

module.exports = router;
