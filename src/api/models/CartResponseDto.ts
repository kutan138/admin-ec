/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartItemResponseDto } from './CartItemResponseDto';
export type CartResponseDto = {
    /**
     * Cart unique identifier
     */
    id: string;
    /**
     * User unique identifier
     */
    userId: string;
    /**
     * Cart creation date
     */
    createdAt: string;
    /**
     * Cart last update date
     */
    updatedAt: string;
    /**
     * Items in the cart
     */
    items?: Array<CartItemResponseDto>;
};

