import { Request, Response } from 'express';
import { error, success } from '../configs/responseConfig';
import { responseCodes } from '../configs/responseCodes';
import { IUiSection } from '../types/uiSectionType';
import * as uiSection from '../models/useCases/uiSection';

export const get = async (req: Request, res: Response) => {
    try {
        const uiSections = await uiSection.findAll();

        if (typeof uiSections === 'string') {
            return res.send(
                error({
                    statusCode: responseCodes.serverError,
                    data: uiSections,
                })
            );
        }

        return res.send(
            success({
                statusCode: responseCodes.success,
                message: 'uiSections fetched successfully',
                data: uiSections,
            })
        );
    } catch (err) {
        return res.send(
            error({
                statusCode: responseCodes.serverError,
            })
        );
    }
};

export const getOne = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const uiSections = await uiSection.findOne(id);

        if (typeof uiSections === 'string') {
            return res.send(
                error({
                    statusCode: responseCodes.serverError,
                    data: uiSections,
                })
            );
        }

        return res.send(
            success({
                statusCode: responseCodes.success,
                message: 'uiSections fetched successfully',
                data: uiSections,
            })
        );
    } catch (err) {
        return res.send(
            error({
                statusCode: responseCodes.serverError,
            })
        );
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const uiSectionsData: IUiSection = req.body;

        const uiSections = await uiSection.create(uiSectionsData);

        if (typeof uiSections === 'string') {
            return res.send(
                error({
                    statusCode: responseCodes.serverError,
                    data: uiSections,
                })
            );
        }

        return res.send(
            success({
                statusCode: responseCodes.success,
                message: 'New uiSection created successfully',
                data: uiSections,
            })
        );
    } catch (err) {
        return res.send(
            error({
                statusCode: responseCodes.serverError,
            })
        );
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const uiSectionsData: IUiSection = req.body;
        const id = req.params.id;

        const uiSections = await uiSection.update(uiSectionsData);

        if (typeof uiSections === 'string') {
            return res.send(
                error({
                    statusCode: responseCodes.serverError,
                })
            );
        }

        return res.send(
            success({
                statusCode: responseCodes.success,
                message: 'uiSection updated successfully',
            })
        );
    } catch (err) {
        return res.send(
            error({
                statusCode: responseCodes.serverError,
            })
        );
    }
};

export const deleteOne = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const uiSectionsExists = await uiSection.findOne(id);
        if (typeof uiSectionsExists === 'string') {
            return res.send(
                error({
                    statusCode: responseCodes.notFound,
                    message: 'uiSection not found',
                })
            );
        }
        const uiSections = await uiSection.deleteOne(id);

        if (typeof uiSections === 'string') {
            return res.send(
                error({
                    statusCode: responseCodes.serverError,
                })
            );
        }

        return res.send(
            success({
                statusCode: responseCodes.success,
                message: 'uiSection deleted',
            })
        );
    } catch (err) {
        return res.send(
            error({
                statusCode: responseCodes.serverError,
            })
        );
    }
};
