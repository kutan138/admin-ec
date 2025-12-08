/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Permission } from './Permission';
export type CreateRoleDto = {
    /**
     * Role name
     */
    name: string;
    /**
     * List of permissions for the role
     */
    permissions?: Array<Permission>;
};

