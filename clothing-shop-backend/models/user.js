const CryptoJS = require("crypto-js");

const users = [
	{
		id: "1",
		email: "admin@example.com",
		password: CryptoJS.AES.encrypt("admin123", "secret_key").toString(),
		firstName: "Admin",
		lastName: "User",
		phone: "123-456-7890",
		role: "admin"  // Added role
	},
	{
		id: "2",
		email: "test1@gmail.com",
		password: CryptoJS.AES.encrypt("password123", "secret_key").toString(),
		firstName: "Test",
		lastName: "User",
		phone: "987-654-3210",
		role: "user"  // Added role
	},
	{
		id: "3",
		email: "fg@gmail.com",
		password: CryptoJS.AES.encrypt("password123", "secret_key").toString(),
		firstName: "Test",
		lastName: "User",
		phone: "987-654-3210",
		role: "user"  // Added role
	},
];

module.exports = users;
