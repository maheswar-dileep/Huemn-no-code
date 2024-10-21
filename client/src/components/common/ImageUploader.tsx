import { createContext, useEffect, useState } from 'react';
import { FieldValues, SetFieldValue } from 'react-hook-form';

type Props<T extends FieldValues> = {
    uwConfig: object;
    setPublicId: (publicId: string) => void;
    setValue: SetFieldValue<T>;
};

// Define the context type
interface CloudinaryScriptContextType {
    loaded: boolean;
}

// Create the context with an initial value of null or the proper type
const CloudinaryScriptContext =
    createContext<CloudinaryScriptContextType | null>(null);

function CloudinaryUploadWidget<T extends FieldValues>({
    uwConfig,
    setPublicId,
    setValue,
}: Props<T>) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Check if the script is already loaded
        if (!loaded) {
            const uwScript = document.getElementById('uw');
            if (!uwScript) {
                // If not loaded, create and load the script
                const script = document.createElement('script');
                script.setAttribute('async', '');
                script.setAttribute('id', 'uw');
                script.src =
                    'https://upload-widget.cloudinary.com/global/all.js';
                script.addEventListener('load', () => setLoaded(true));
                document.body.appendChild(script);
            } else {
                // If already loaded, update the state
                setLoaded(true);
            }
        }
    }, [loaded]);

    const initializeCloudinaryWidget = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (loaded && (window as any).cloudinary) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const myWidget = (window as any).cloudinary.createUploadWidget(
                uwConfig,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (error: any, result: any) => {
                    if (!error && result && result.event === 'success') {
                        console.log(
                            'Done! Here is the image info: ',
                            result.info
                        );
                        setValue('image', result.info.url);
                        setPublicId(result.info.public_id);
                    }
                }
            );

            document.getElementById('upload_widget')?.addEventListener(
                'click',
                () => {
                    myWidget.open();
                },
                false
            );
        }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <button
                id="upload_widget"
                className="cloudinary-button"
                type="button"
                onClick={initializeCloudinaryWidget}
            >
                Upload
            </button>
        </CloudinaryScriptContext.Provider>
    );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
