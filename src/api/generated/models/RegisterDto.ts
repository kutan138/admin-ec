/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RegisterDto = {
    /**
     * User email address
     */
    email: string;
    /**
     * User password
     */
    password: string;
    /**
     * Authentication provider
     */
    provider: 'local' | 'google' | 'facebook';
};

