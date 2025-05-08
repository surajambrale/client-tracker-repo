const Admin = require('../models/adminModel');

exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email, password });

        if (!admin) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        res.status(200).json({ success: true, message: "Login successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
