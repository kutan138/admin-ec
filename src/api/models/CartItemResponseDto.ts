/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from './Product';
export type CartItemResponseDto = {
    /**
     * Cart item unique identifier
     */
    id: string;
    /**
     * Cart unique identifier
     */
    cartId: string;
    /**
     * Product unique identifier
     */
    productId: string;
    /**
     * Quantity of the product
     */
    quantity: number;
    /**
     * Product details
     */
    product?: Product;
};

