/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from '../models/Category';
import type { CreateCategoryDto } from '../models/CreateCategoryDto';
import type { UpdateCategoryDto } from '../models/UpdateCategoryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CategoriesService {
    /**
     * Create a new category
     * @param requestBody
     * @returns Category Category created successfully
     * @throws ApiError
     */
    public static categoriesControllerCreate(
        requestBody: CreateCategoryDto,
    ): CancelablePromise<Category> {
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
     * @returns Category List of all categories
     * @throws ApiError
     */
    public static categoriesControllerFindAll(): CancelablePromise<Array<Category>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/categories',
        });
    }
    /**
     * Get a category by ID
     * @param id
     * @returns Category Category found
     * @throws ApiError
     */
    public static categoriesControllerFindOne(
        id: string,
    ): CancelablePromise<Category> {
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
     * @returns Category Category updated successfully
     * @throws ApiError
     */
    public static categoriesControllerUpdate(
        id: string,
        requestBody: UpdateCategoryDto,
    ): CancelablePromise<Category> {
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
     * @returns any Category deleted successfully
     * @throws ApiError
     */
    public static categoriesControllerRemove(
        id: string,
    ): CancelablePromise<any> {
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
