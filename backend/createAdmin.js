const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Replace with your MongoDB connection string
mongoose.connect('mongodb+srv://surajambrale9003:surajambrale9003@cluster.3a07dkd.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Admin schema
const adminSchema = new mongoose.Schema({
    username: String,
    password: String, // hashed password
});

const Admin = mongoose.model('Admin', adminSchema);

// Create admin user
async function createAdmin() {
    const hashedPassword = await bcrypt.hash('admin123', 10); // use a strong password
    const admin = new Admin({
        username: 'admin',
        password: hashedPassword,
    });

    await admin.save();
    console.log('✅ Admin user created successfully!');
    mongoose.disconnect();
}

createAdmin().catch(err => {
    console.error('❌ Error creating admin:', err);
    mongoose.disconnect();
});
