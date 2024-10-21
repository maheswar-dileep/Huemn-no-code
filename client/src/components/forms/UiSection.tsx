import { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload } from 'lucide-react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { UiSectionSchema } from '../../schema/UiSectionSchema';
import SelectInput from '../atomic/SelectInput';
import { Button } from '../ui/button';
import CloudinaryUploadWidget from '../common/ImageUploader';

type plansType = z.infer<typeof UiSectionSchema>;

type AddPlansFormProps = {
    onSubmit: (data: plansType) => void;
    defaultValues?: Partial<plansType>;
};

const UiSectionForm = forwardRef<HTMLFormElement, AddPlansFormProps>(
    ({ onSubmit, defaultValues }, ref) => {
        const {
            register,
            handleSubmit,
            setValue,
            formState: { errors },
        } = useForm<plansType>({
            resolver: zodResolver(UiSectionSchema),
            defaultValues,
        });
        const [publicId, setPublicId] = useState('');
        const cloudName = import.meta.env.VITE_APP_CLOUD_NAME;
        const uploadPreset = import.meta.env.VITE_APP_UPLOAD_PRESET;
        const [uwConfig] = useState({
            cloudName,
            uploadPreset,
        });

        const cld = new Cloudinary({
            cloud: {
                cloudName,
            },
        });

        const myImage = cld.image(publicId);

        return (
            <form
                className="flex flex-col gap-4 w-64"
                ref={ref}
                onSubmit={handleSubmit(onSubmit)}
            >
                <SelectInput
                    label="Category"
                    name="category"
                    register={register}
                    setValue={setValue}
                    error={errors.category?.message}
                    className="grid w-full items-center gap-1.5 sm:w-80"
                    options={[
                        {
                            value: 'header',
                            label: 'Header',
                        },
                        {
                            value: 'footer',
                            label: 'Footer',
                        },
                        {
                            value: 'hero',
                            label: 'Hero',
                        },
                        {
                            value: 'team',
                            label: 'Team',
                        },
                        {
                            value: 'other',
                            label: 'Other',
                        },
                    ]}
                    defaultValue="Select Gender"
                />
                <SelectInput
                    label="Default Location"
                    name="defaultLocation"
                    register={register}
                    setValue={setValue}
                    error={errors.category?.message}
                    className="grid w-full items-center gap-1.5 sm:w-80"
                    options={[
                        {
                            value: 'top',
                            label: 'Top',
                        },
                        {
                            value: 'bottom',
                            label: 'Bottom',
                        },
                    ]}
                    defaultValue="Select Gender"
                />

                <div>
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Image
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="image"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <CloudinaryUploadWidget
                                        uwConfig={uwConfig}
                                        setPublicId={setPublicId}
                                        setValue={setValue}
                                    />
                                    <AdvancedImage
                                        style={{ maxWidth: '100%' }}
                                        cldImg={myImage}
                                        plugins={[responsive(), placeholder()]}
                                    />
                                    <span className="mx-8">Upload a file</span>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>

                    {errors.image?.message && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.image?.message}
                        </p>
                    )}
                    <Button type="submit" className="mt-5">
                        Submit
                    </Button>
                </div>
            </form>
        );
    }
);

export default UiSectionForm;
