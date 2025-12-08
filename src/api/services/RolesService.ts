/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoleDto } from '../models/CreateRoleDto';
import type { Role } from '../models/Role';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RolesService {
    /**
     * Create or update a role with permissions
     * @param requestBody
     * @returns Role Role created or updated successfully
     * @throws ApiError
     */
    public static rolesControllerCreateRole(
        requestBody: CreateRoleDto,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
