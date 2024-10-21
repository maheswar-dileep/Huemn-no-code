import { IUiSection } from '../../types/uiSectionType';
import uiSection from '../entites/uiSection';

export const create = async (data: IUiSection) => {
    try {
        const newuiSection = await uiSection.create(data);
        return newuiSection.toObject();
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return 'An unexpected error occurred';
    }
};

export const findAll = async (): Promise<IUiSection[] | null | string> => {
    try {
        return await uiSection.find();
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return 'An unexpected error occurred';
    }
};

export const findOne = async (
    id: string
): Promise<IUiSection | null | string> => {
    try {
        return (await uiSection
            .findOne({
                _id: id,
            })
            .lean()) as IUiSection | null;
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return 'An unexpected error occurred';
    }
};

export const update = async (data: Partial<IUiSection>) => {
    try {
        return await uiSection.updateOne({ _id: data._id }, { $set: { data } });
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return 'An unexpected error occurred';
    }
};

export const deleteOne = async (id: string) => {
    try {
        return await uiSection.deleteOne({ _id: id });
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return 'An unexpected error occurred';
    }
};
