/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCartItemDto } from '../models/AddCartItemDto';
import type { CartItemResponseDto } from '../models/CartItemResponseDto';
import type { CartResponseDto } from '../models/CartResponseDto';
import type { CreateCartDto } from '../models/CreateCartDto';
import type { MessageResponseDto } from '../models/MessageResponseDto';
import type { UpdateCartItemQuantityDto } from '../models/UpdateCartItemQuantityDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CartsService {
    /**
     * Create a new cart
     * @param requestBody
     * @returns CartResponseDto Cart created successfully
     * @throws ApiError
     */
    public static cartsControllerCreate(
        requestBody: CreateCartDto,
    ): CancelablePromise<CartResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get cart by user ID
     * @param userId
     * @returns CartResponseDto Cart found
     * @throws ApiError
     */
    public static cartsControllerFindByUserId(
        userId: string,
    ): CancelablePromise<CartResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carts/user/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                404: `Cart not found`,
            },
        });
    }
    /**
     * Get a cart by ID
     * @param id
     * @returns CartResponseDto Cart found
     * @throws ApiError
     */
    public static cartsControllerFindOne(
        id: string,
    ): CancelablePromise<CartResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carts/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Cart not found`,
            },
        });
    }
    /**
     * Add item to cart
     * @param id
     * @param requestBody
     * @returns CartItemResponseDto Item added successfully
     * @throws ApiError
     */
    public static cartsControllerAddItem(
        id: string,
        requestBody: AddCartItemDto,
    ): CancelablePromise<CartItemResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts/{id}/items',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update cart item quantity
     * @param id
     * @param requestBody
     * @returns CartItemResponseDto Item updated successfully
     * @throws ApiError
     */
    public static cartsControllerUpdateItemQuantity(
        id: string,
        requestBody: UpdateCartItemQuantityDto,
    ): CancelablePromise<CartItemResponseDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/carts/items/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Cart item not found`,
                409: `Invalid quantity`,
            },
        });
    }
    /**
     * Remove item from cart
     * @param id
     * @returns MessageResponseDto Item removed successfully
     * @throws ApiError
     */
    public static cartsControllerRemoveItem(
        id: string,
    ): CancelablePromise<MessageResponseDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/carts/items/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Cart item not found`,
            },
        });
    }
    /**
     * Clear all items from cart
     * @param id
     * @returns MessageResponseDto Cart cleared successfully
     * @throws ApiError
     */
    public static cartsControllerClearCart(
        id: string,
    ): CancelablePromise<MessageResponseDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/carts/{id}/clear',
            path: {
                'id': id,
            },
            errors: {
                404: `Cart not found`,
            },
        });
    }
}
