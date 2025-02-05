const mongoose = require('mongoose');
const ResumeSchema = new mongoose.Schema({
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 fullName: String,
 email: String,
 phone: String,
skills: [String],
 education: [{ institution: String, degree: String, year: Number }],
experience: [{ company: String, role: String, duration: String }]
});
module.exports = mongoose.model('Resume', ResumeSchema);