import { z } from 'zod';
import { forwardRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import memberSchema from '../../schema/MembersSchema';
import FormInput from '../atomic/FormInput';
import SelectInput from '../atomic/SelectInput';
import TextArea from '../atomic/TextArea';
import apiClient from '../../config/apiClient';
import { ApiResponse } from '../../types/genericResponse';
import { IPlans } from '../../types/planType';

type Props = {
    onSubmit: (data: membersType) => void;
    defaultValues?: Partial<membersType>;
};
type membersType = z.infer<typeof memberSchema>;

const AddMembers = forwardRef<HTMLFormElement, Props>(
    ({ onSubmit, defaultValues }, ref) => {
        const {
            setValue,
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<membersType>({
            resolver: zodResolver(memberSchema),
            defaultValues,
        });

        const [plans, setPlans] = useState<{ label: string; value: string }[]>(
            []
        );

        const getPlans = async () => {
            const res: ApiResponse<IPlans[]> = await apiClient.get('/plans');
            if (res && res.code === 200) {
                const plansData = res.data.map((item) => ({
                    label: item.name,
                    value: item._id,
                }));
                setPlans(plansData);
            }
        };

        useEffect(() => {
            getPlans();
        }, []);

        return (
            <form
                ref={ref}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                    <FormInput
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        label="Full Name"
                        name="name"
                        placeholder="Full name"
                        type="text"
                        error={errors.name?.message}
                        register={register}
                    />

                    <FormInput
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        label="Email"
                        name="email"
                        placeholder="Email"
                        type="text"
                        error={errors.email?.message}
                        register={register}
                    />

                    <FormInput
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        label="Mobile Number"
                        name="mobile"
                        maxLength={10}
                        placeholder="Mobile Number"
                        type="tel"
                        error={errors.mobile?.message}
                        register={register}
                    />

                    <FormInput
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        label="Date Of Birth"
                        name="DOB"
                        maxLength={10}
                        placeholder="Date Of Birth"
                        type="date"
                        error={errors.DOB?.message}
                        register={register}
                    />

                    <SelectInput
                        label="Gender"
                        name="gender"
                        register={register}
                        setValue={setValue}
                        error={errors.gender?.message}
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        options={[
                            {
                                value: 'male',
                                label: 'Male',
                            },
                            {
                                value: 'female',
                                label: 'Female',
                            },
                            {
                                value: 'other',
                                label: 'Other',
                            },
                        ]}
                        defaultValue="Select Gender"
                    />

                    <SelectInput
                        label="Working Status"
                        name="workingStatus"
                        register={register}
                        setValue={setValue}
                        error={errors.workingStatus?.message}
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        options={[
                            {
                                value: 'working',
                                label: 'Working',
                            },
                            {
                                value: 'student',
                                label: 'Student',
                            },
                        ]}
                        defaultValue="Select Working Status"
                    />

                    <FormInput
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        label="Height"
                        name="height"
                        placeholder="Height"
                        type="text"
                        maxLength={5}
                        error={errors.height?.message}
                        register={register}
                    />

                    <FormInput
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        label="Weight"
                        name="weight"
                        placeholder="Weight"
                        type="text"
                        maxLength={5}
                        error={errors.weight?.message}
                        register={register}
                    />

                    <FormInput
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        label="Blood Group"
                        name="bloodGroup"
                        placeholder="Blood Group"
                        type="text"
                        maxLength={5}
                        error={errors.bloodGroup?.message}
                        register={register}
                    />

                    <SelectInput
                        label="Plan"
                        name="plan"
                        register={register}
                        setValue={setValue}
                        error={errors.plan?.message}
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        options={plans}
                        defaultValue="Select Working Status"
                    />

                    <FormInput
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        label="Emergency Contact"
                        name="emergencyContact"
                        placeholder="Emergency Contact"
                        type="tel"
                        maxLength={10}
                        error={errors.emergencyContact?.message}
                        register={register}
                    />

                    <FormInput
                        className="grid w-full items-center gap-1.5 sm:w-80"
                        label="Contact Name"
                        name="emergencyContactName"
                        placeholder="Emergency Contact Name"
                        type="text"
                        error={errors.emergencyContactName?.message}
                        register={register}
                    />

                    <TextArea
                        className="grid w-full items-center gap-1.5 sm:w-full col-span-2"
                        label="Address"
                        name="address"
                        placeholder="Address"
                        error={errors.address?.message}
                        register={register}
                    />
                </div>
            </form>
        );
    }
);

export default AddMembers;
