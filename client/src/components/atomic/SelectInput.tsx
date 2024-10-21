import { useEffect } from 'react';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '../ui/select';
import {
    UseFormRegister,
    FieldValues,
    Path,
    UseFormSetValue,
} from 'react-hook-form';

type Props<T extends FieldValues> = {
    name: Path<T>;
    register: UseFormRegister<T>;
    label: string;
    setValue: UseFormSetValue<T>;
    error?: string;
    className?: string;
    options: { value: string; label: string }[];
    defaultValue: string;
};

const SelectInput = <T extends FieldValues>({
    name,
    register,
    label,
    error,
    className,
    options,
    defaultValue,
    setValue,
}: Props<T>) => {
    useEffect(() => {
        register(name);
    }, [register, name]);

    const handleChange = (value: string) => {
        setValue(name, value);
    };

    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <Select onValueChange={handleChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem disabled value="nill">
                        {defaultValue && defaultValue}
                    </SelectItem>
                    {options &&
                        options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                </SelectContent>
            </Select>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default SelectInput;
