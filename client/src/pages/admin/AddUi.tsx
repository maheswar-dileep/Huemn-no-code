import { z } from 'zod';
import UiSectionForm from '../../components/forms/UiSection';
import { UiSectionSchema } from '../../schema/UiSectionSchema';
import apiClient from '../../config/apiClient';

const AddUi = () => {
    const onSubmit = async (data: z.infer<typeof UiSectionSchema>) => {
        const res = await apiClient.post('/ui-section', data);
        console.log(res);
    };
    return (
        <div>
            <UiSectionForm onSubmit={onSubmit} />
        </div>
    );
};

export default AddUi;
