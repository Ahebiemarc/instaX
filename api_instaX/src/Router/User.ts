import { Router } from 'express';
import {register} from '../Controllers/userController';




const router = Router();

router.post('/auth/check-account', register);

export default router;
