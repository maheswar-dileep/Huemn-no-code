import { Router } from 'express';

import * as uiSection from '../controllers/uiSection';
import { asyncHandler } from '../middlewares/asyncHandler';
import { validateData } from '../middlewares/validation';
import { userLoginSchema, userRegistrationSchema } from '../schema/auth';

const router = Router();

router.route('/').get(asyncHandler(uiSection.get));
router.route('/:id').get(asyncHandler(uiSection.get));
router.route('/').post(asyncHandler(uiSection.create));
// .post(validateData(userRegistrationSchema), asyncHandler(uiSection.create));
router
    .route('/')
    .put(validateData(userLoginSchema), asyncHandler(uiSection.update));

export default router;
