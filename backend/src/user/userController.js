const userService = require('./userService');

// GET: Get all users
exports.getDataControllerfn = async (req, res) => {
    try {
        const users = await userService.getDataFromDBService();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// POST: Create new user
exports.createUserControllerFn = async (req, res) => {
    try {
        const status = await userService.createUserDBService(req.body);
        if (status) {
            res.status(201).json({ success: true, message: "User created successfully" });
        } else {
            res.status(400).json({ success: false, message: "Failed to create user" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// PUT: Update user
exports.updateUserController = async (req, res) => {
    try {
        const result = await userService.updateUserDBService(req.params.id, req.body);
        if (result) {
            res.status(200).json({ success: true, message: "User updated successfully" });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
};

// DELETE: Delete user
exports.deleteUserController = async (req, res) => {
    try {
        const result = await userService.removeUserDBService(req.params.id);
        if (result) {
            res.status(200).json({ success: true, message: "User deleted successfully" });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
};
