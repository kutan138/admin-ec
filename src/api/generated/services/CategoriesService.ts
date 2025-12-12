/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryResponseDto } from '../models/CategoryResponseDto';
import type { CreateCategoryDto } from '../models/CreateCategoryDto';
import type { MessageResponseDto } from '../models/MessageResponseDto';
import type { UpdateCategoryDto } from '../models/UpdateCategoryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CategoriesService {
    /**
     * Create a new category
     * @param requestBody
     * @returns CategoryResponseDto Category created successfully
     * @throws ApiError
     */
    public static categoriesControllerCreate(
        requestBody: CreateCategoryDto,
    ): CancelablePromise<CategoryResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/categories',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Category name already exists`,
            },
        });
    }
    /**
     * Get all categories
     * @returns CategoryResponseDto List of all categories
     * @throws ApiError
     */
    public static categoriesControllerFindAll(): CancelablePromise<Array<CategoryResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories',
        });
    }
    /**
     * Get a category by ID
     * @param id
     * @returns CategoryResponseDto Category found
     * @throws ApiError
     */
    public static categoriesControllerFindOne(
        id: string,
    ): CancelablePromise<CategoryResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Category not found`,
            },
        });
    }
    /**
     * Update a category
     * @param id
     * @param requestBody
     * @returns CategoryResponseDto Category updated successfully
     * @throws ApiError
     */
    public static categoriesControllerUpdate(
        id: string,
        requestBody: UpdateCategoryDto,
    ): CancelablePromise<CategoryResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Category not found`,
                409: `Category name already exists`,
            },
        });
    }
    /**
     * Delete a category
     * @param id
     * @returns MessageResponseDto Category deleted successfully
     * @throws ApiError
     */
    public static categoriesControllerRemove(
        id: string,
    ): CancelablePromise<MessageResponseDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Category not found`,
            },
        });
    }
}
