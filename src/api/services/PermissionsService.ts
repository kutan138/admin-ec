/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePermissionDto } from '../models/CreatePermissionDto';
import type { PermissionResponseDto } from '../models/PermissionResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionsService {
    /**
     * Create a new permission
     * @param requestBody
     * @returns PermissionResponseDto Permission created successfully
     * @throws ApiError
     */
    public static permissionsControllerCreate(
        requestBody: CreatePermissionDto,
    ): CancelablePromise<PermissionResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/permissions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Permission name already exists`,
            },
        });
    }
}
