/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionResponseDto } from './PermissionResponseDto';
export type RoleResponseDto = {
    /**
     * Role unique identifier
     */
    id: string;
    /**
     * Role name
     */
    name: string;
    /**
     * Role description
     */
    description?: string;
    /**
     * Role creation date
     */
    createdAt: string;
    /**
     * Role last update date
     */
    updatedAt: string;
    /**
     * Permissions assigned to this role
     */
    permissions?: Array<PermissionResponseDto>;
};

