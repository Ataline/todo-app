const mongoose = require('mongoose');

const dayRegEx = /\d{2}\/\d{2}\/\d{4}/g;
const timeRegEx = /\d{2}:\d{2}:\d{2}/g;
const DAY_ERROR_MESSAGE = 'Invalid day format. The expected format is dd/mm/yyyy';
const TIME_ERROR_MESSAGE = 'Invalid time format. The expected format is hh:mm:ss'

const propValidator = (regEx, v) => {
  return regEx.test(v);
};

const Schema = mongoose.Schema;
const taskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  startOn: {
    type: String,
    required: true,
    validate: {
      validator: (v) => propValidator(dayRegEx, v),
      message: DAY_ERROR_MESSAGE
    }
  },
  endOn: {
    type: String,
    required: true,
    validate: {
      validator: (v) => propValidator(dayRegEx, v),
      message: DAY_ERROR_MESSAGE
    }
  },
  // startAt: {
  //   type: String,
  //   required: true,
  //   validate: {
  //     validator: (v) => propValidator(timeRegEx, v),
  //     message: TIME_ERROR_MESSAGE
  //   }
  // },
  endAt: {
    type: String,
    required: true,
    validate: {
      validator: (v) => propValidator(timeRegEx, v),
      message: TIME_ERROR_MESSAGE
    }
  }
});

//taskSchema.path(['startAt', 'endAt']).validate((v) =>  propValidator(dayRegEx, v));

module.exports =  mongoose.model('Task', taskSchema);
