const createSchema = (mongoose) => {
  const Schema = mongoose.Schema;
  return new Schema({
    title: { type: String, required: true },
    description: String,
    startAt: { type: Date, default: Date.now, required: true },
    endAt: { type: Date, required: true }
  });
};

const createModel = (mongoose, schema) => {
  return mongoose.model('Task', schema);
};

const getModel = (mongoose, schema) => {
  return mongoose.model('Tasks', schema);
};

module.exports = {
  createSchema,
  createModel,
  getModel
};
