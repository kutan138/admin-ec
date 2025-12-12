/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductDto } from '../models/CreateProductDto';
import type { CreateProductImageDto } from '../models/CreateProductImageDto';
import type { MessageResponseDto } from '../models/MessageResponseDto';
import type { ProductImageResponseDto } from '../models/ProductImageResponseDto';
import type { ProductResponseDto } from '../models/ProductResponseDto';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Create a new product
     * @param requestBody
     * @returns ProductResponseDto Product created successfully
     * @throws ApiError
     */
    public static productsControllerCreate(
        requestBody: CreateProductDto,
    ): CancelablePromise<ProductResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get all products
     * @returns ProductResponseDto List of all products
     * @throws ApiError
     */
    public static productsControllerFindAll(): CancelablePromise<Array<ProductResponseDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
        });
    }
    /**
     * Get a product by ID
     * @param id
     * @returns ProductResponseDto Product found
     * @throws ApiError
     */
    public static productsControllerFindOne(
        id: string,
    ): CancelablePromise<ProductResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Product not found`,
            },
        });
    }
    /**
     * Update a product
     * @param id
     * @param requestBody
     * @returns ProductResponseDto Product updated successfully
     * @throws ApiError
     */
    public static productsControllerUpdate(
        id: string,
        requestBody: UpdateProductDto,
    ): CancelablePromise<ProductResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Product not found`,
            },
        });
    }
    /**
     * Delete a product
     * @param id
     * @returns MessageResponseDto Product deleted successfully
     * @throws ApiError
     */
    public static productsControllerRemove(
        id: string,
    ): CancelablePromise<MessageResponseDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Product not found`,
            },
        });
    }
    /**
     * Add an image to a product
     * @param requestBody
     * @returns ProductImageResponseDto Image added successfully
     * @throws ApiError
     */
    public static productsControllerAddImage(
        requestBody: CreateProductImageDto,
    ): CancelablePromise<ProductImageResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/images',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove an image from a product
     * @param id
     * @returns MessageResponseDto Image removed successfully
     * @throws ApiError
     */
    public static productsControllerRemoveImage(
        id: string,
    ): CancelablePromise<MessageResponseDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/products/images/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Image not found`,
            },
        });
    }
}
