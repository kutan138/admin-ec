/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePermissionDto } from '../models/CreatePermissionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionsService {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static permissionsControllerCreate(
        requestBody: CreatePermissionDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/permissions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
