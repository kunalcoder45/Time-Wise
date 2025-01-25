import { Router } from "express";
import * as userControllers from '../controllers/user.controller.js';
import { body } from "express-validator";
import * as authMiddleware from "../middleware/auth.middleware.js";


const router = Router();

router.post(
    '/register',
    [
        // Validate the email field
        body('email')
            .isEmail()
            .withMessage('Email must be a valid email address!')
            .normalizeEmail(),
        
        // Validate the password field
        body('password')
            .isLength({ min: 3 })
            .withMessage('Password must be at least 3 characters long!'),
    ],
    userControllers.createUserController
);

router.post(
    '/login',
    [
        // Validate the email field
        body('email')
            .isEmail()
            .withMessage('Email must be a valid email address!')
            .normalizeEmail(),
        
        // Validate the password field
        body('password')
            .isLength({ min: 3 })
            .withMessage('Password must be at least 3 characters long!'),
    ],
    userControllers.loginController
)

router.get('/profile', authMiddleware.authUser, userControllers.ProfileController);

router.get('/logout', authMiddleware.authUser, userControllers.logoutController)

export default router;