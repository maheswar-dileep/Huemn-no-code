import { z } from 'zod';

export const UiSectionSchema = z.object({
    image: z.string({ required_error: 'Image is required' }),
    category: z.enum(['header', 'footer', 'hero', 'team', 'other'], {
        required_error: 'Category is required',
    }),
    defaultLocation: z.enum(['top', 'bottom'], {
        required_error: 'Default location is required',
    }),
});
