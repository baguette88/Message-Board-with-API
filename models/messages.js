const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  message:   { type: String, required: true },
  user:  { type: String, required: true },
  likes:  { type: Number, default: 0 },
  //  level:  { type: Number, default: 1 },
  // superUser: Boolean,
    board: {type: String, default: 'public'}
}, {timestamps: true});

const Message = mongoose.model('Message', messageSchema)
// const messageSeed = mongoose.model('messageSeed', messageSchema)

module.exports = Message






