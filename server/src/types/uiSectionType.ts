import mongoose from 'mongoose';

export interface IUiSection {
    _id: mongoose.Types.ObjectId;
    category: 'header' | 'footer' | 'hero' | 'team' | 'other';
    defaultLocation: 'top' | 'bottom';
    image: string;
}
