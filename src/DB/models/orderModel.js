import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema({
  id: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [{ type: String, required: true }],
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
