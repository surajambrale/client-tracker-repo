const userModel = require("./userModel");

// GET: Get all user data
module.exports.getDataFromDBService = async () => {
    try {
        const users = await userModel.find({});
        return users;
    } catch (error) {
        throw error;
    }
};

// POST: Create new user
module.exports.createUserDBService = async (userDetails) => {
    try {
        const userModelData = new userModel({
            name: userDetails.name,
            address: userDetails.address,
            phone: userDetails.phone,
            trainingStartDate: userDetails.trainingStartDate,
            trainingEndDate: userDetails.trainingEndDate,
            trainingCost: userDetails.trainingCost,
            paymentDone: userDetails.paymentDone,
            balance: userDetails.balance,
            notes: userDetails.notes
        });

        await userModelData.save();
        return true;
    } catch (error) {
        console.error("Error saving user:", error);
        throw error;
    }
};

// PUT: Update existing user by ID
module.exports.updateUserDBService = async (id, userDetails) => {
    try {
        const result = await userModel.findByIdAndUpdate(id, {
            name: userDetails.name,
            address: userDetails.address,
            phone: userDetails.phone,
            trainingStartDate: userDetails.trainingStartDate,
            trainingEndDate: userDetails.trainingEndDate,
            trainingCost: userDetails.trainingCost,
            paymentDone: userDetails.paymentDone,
            balance: userDetails.balance,
            notes: userDetails.notes
        }, { new: true });

        return result;
    } catch (error) {
        throw error;
    }
};

// DELETE: Remove user by ID
module.exports.removeUserDBService = async (id) => {
    try {
        const result = await userModel.findByIdAndDelete(id);
        return result;
    } catch (error) {
        throw error;
    }
};
