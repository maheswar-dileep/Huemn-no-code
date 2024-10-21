import { Router } from 'express';

import authRoutes from './auth';
import uiSectionRoutes from './uiSection';

const router = Router();

router.use('/auth', authRoutes);
router.use('/ui-section', uiSectionRoutes);

export default router;
