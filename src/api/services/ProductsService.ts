/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductDto } from '../models/CreateProductDto';
import type { CreateProductImageDto } from '../models/CreateProductImageDto';
import type { Product } from '../models/Product';
import type { ProductImage } from '../models/ProductImage';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Create a new product
     * @param requestBody
     * @returns Product Product created successfully
     * @throws ApiError
     */
    public static productsControllerCreate(
        requestBody: CreateProductDto,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get all products
     * @returns Product List of all products
     * @throws ApiError
     */
    public static productsControllerFindAll(): CancelablePromise<Array<Product>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
        });
    }
    /**
     * Get a product by ID
     * @param id
     * @returns Product Product found
     * @throws ApiError
     */
    public static productsControllerFindOne(
        id: string,
    ): CancelablePromise<Product> {
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
     * @returns Product Product updated successfully
     * @throws ApiError
     */
    public static productsControllerUpdate(
        id: string,
        requestBody: UpdateProductDto,
    ): CancelablePromise<Product> {
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
     * @returns any Product deleted successfully
     * @throws ApiError
     */
    public static productsControllerRemove(
        id: string,
    ): CancelablePromise<any> {
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
     * @returns ProductImage Image added successfully
     * @throws ApiError
     */
    public static productsControllerAddImage(
        requestBody: CreateProductImageDto,
    ): CancelablePromise<ProductImage> {
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
     * @returns any Image removed successfully
     * @throws ApiError
     */
    public static productsControllerRemoveImage(
        id: string,
    ): CancelablePromise<any> {
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
