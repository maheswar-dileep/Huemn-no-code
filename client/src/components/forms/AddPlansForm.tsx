import { forwardRef } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

import { PlansSchema } from '../../schema/PlansSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../atomic/FormInput';

type plansType = z.infer<typeof PlansSchema>;

type AddPlansFormProps = {
    onSubmit: (data: plansType) => void;
    defaultValues?: Partial<plansType>;
};

const AddPlansForm = forwardRef<HTMLFormElement, AddPlansFormProps>(
    ({ onSubmit, defaultValues }, ref) => {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<plansType>({
            resolver: zodResolver(PlansSchema),
            defaultValues,
        });

        return (
            <form
                className="flex flex-col gap-4 w-64"
                ref={ref}
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormInput
                    className="grid w-full items-center gap-1.5"
                    label="Plan Name"
                    name="name"
                    placeholder="Plan name"
                    type="text"
                    error={errors.name?.message}
                    register={register}
                />
                <FormInput
                    className="grid w-full items-center gap-1.5 "
                    label="Plan Duration"
                    name="duration"
                    placeholder="Plan duration"
                    type="text"
                    error={errors.duration?.message}
                    register={register}
                    valueAsNumber
                />
                <FormInput
                    className="grid w-full items-center gap-1.5 "
                    label="Plan Amount"
                    name="amount"
                    placeholder="Plan amount"
                    type="number"
                    error={errors.amount?.message}
                    register={register}
                    valueAsNumber
                />
            </form>
        );
    }
);

export default AddPlansForm;
