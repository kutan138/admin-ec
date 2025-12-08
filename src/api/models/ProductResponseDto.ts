/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductImageResponseDto } from './ProductImageResponseDto';
export type ProductResponseDto = {
    /**
     * Product unique identifier
     */
    id: string;
    /**
     * Category unique identifier
     */
    categoryId?: string;
    /**
     * Product name
     */
    name: string;
    /**
     * Product description
     */
    description?: string;
    /**
     * Product price
     */
    price: number;
    /**
     * Product stock quantity
     */
    stock: number;
    /**
     * Product thumbnail URL
     */
    thumbnail?: string;
    /**
     * Product creation date
     */
    createdAt: string;
    /**
     * Product last update date
     */
    updatedAt: string;
    /**
     * Product images
     */
    images?: Array<ProductImageResponseDto>;
};

