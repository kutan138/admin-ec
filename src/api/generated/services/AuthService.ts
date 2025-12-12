/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveDto } from '../models/ActiveDto';
import type { ForgotPasswordDto } from '../models/ForgotPasswordDto';
import type { LoginDto } from '../models/LoginDto';
import type { MessageResponseDto } from '../models/MessageResponseDto';
import type { RegisterDto } from '../models/RegisterDto';
import type { ResetPasswordDto } from '../models/ResetPasswordDto';
import type { TokenResponseDto } from '../models/TokenResponseDto';
import type { UserResponseDto } from '../models/UserResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * User login
     * @param requestBody
     * @returns TokenResponseDto Login successful
     * @throws ApiError
     */
    public static authControllerLogin(
        requestBody: LoginDto,
    ): CancelablePromise<TokenResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User registration
     * @param requestBody
     * @returns UserResponseDto User registered successfully
     * @throws ApiError
     */
    public static authControllerRegister(
        requestBody: RegisterDto,
    ): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Activate user account
     * @param requestBody
     * @returns UserResponseDto Account activated successfully
     * @throws ApiError
     */
    public static authControllerActive(
        requestBody: ActiveDto,
    ): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/active',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Refresh access token
     * @returns TokenResponseDto Token refreshed successfully
     * @throws ApiError
     */
    public static authControllerRefresh(): CancelablePromise<TokenResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refresh',
        });
    }
    /**
     * Initiate Google OAuth authentication
     * @returns void
     * @throws ApiError
     */
    public static authControllerGoogleAuth(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/google',
            errors: {
                302: `Redirects to Google OAuth`,
            },
        });
    }
    /**
     * Google OAuth callback
     * @returns TokenResponseDto Google authentication successful
     * @throws ApiError
     */
    public static authControllerGoogleAuthRedirect(): CancelablePromise<TokenResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/google/callback',
        });
    }
    /**
     * Request password reset
     * @param requestBody
     * @returns MessageResponseDto Password reset email sent if email exists
     * @throws ApiError
     */
    public static authControllerForgotPassword(
        requestBody: ForgotPasswordDto,
    ): CancelablePromise<MessageResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/forgot-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Reset password with token
     * @param requestBody
     * @returns MessageResponseDto Password reset successfully
     * @throws ApiError
     */
    public static authControllerResetPassword(
        requestBody: ResetPasswordDto,
    ): CancelablePromise<MessageResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/reset-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
