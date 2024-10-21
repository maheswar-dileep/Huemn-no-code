import mongoose, { Schema } from 'mongoose';

const uiSectionSchema = new Schema({
    category: {
        type: String,
        enum: ['header', 'footer', 'hero', 'team', 'other'],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    defaultLocation: {
        type: String,
        enum: ['top', 'bottom'],
        required: true,
    },
});

const User = mongoose.model('UiSection', uiSectionSchema);
export default User;
