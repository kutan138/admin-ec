import MockAdapter from "axios-mock-adapter";
import { productsData } from "../data/products.data";
import type { Product } from "@/types";

export function setupProductsMock(mock: MockAdapter) {
  // GET /api/products - Lấy danh sách products với pagination
  mock.onGet("/api/products").reply((config) => {
    const { page = 1, limit = 10, category } = config.params || {};

    let filteredProducts = [...productsData];

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === category
      );
    }

    // Pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedProducts = filteredProducts.slice(start, end);

    return [
      200,
      {
        success: true,
        data: paginatedProducts,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: filteredProducts.length,
          totalPages: Math.ceil(filteredProducts.length / limit),
        },
      },
    ];
  });

  // GET /api/products/:id
  mock.onGet(/\/api\/products\/\d+/).reply((config) => {
    const id = parseInt(config.url?.split("/").pop() || "0");
    const product = productsData.find((p) => p.id === id);

    if (product) {
      return [200, { success: true, data: product }];
    }
    return [404, { success: false, message: "Product not found" }];
  });

  // POST /api/products
  mock.onPost("/api/products").reply((config) => {
    const newProduct: Product = {
      id: productsData.length + 1,
      ...JSON.parse(config.data),
    };

    productsData.push(newProduct);

    return [201, { success: true, data: newProduct }];
  });

  // PUT /api/products/:id
  mock.onPut(/\/api\/products\/\d+/).reply((config) => {
    const id = parseInt(config.url?.split("/").pop() || "0");
    const index = productsData.findIndex((p) => p.id === id);

    if (index !== -1) {
      productsData[index] = {
        ...productsData[index],
        ...JSON.parse(config.data),
      };
      return [200, { success: true, data: productsData[index] }];
    }

    return [404, { success: false, message: "Product not found" }];
  });

  // DELETE /api/products/:id
  mock.onDelete(/\/api\/products\/\d+/).reply((config) => {
    const id = parseInt(config.url?.split("/").pop() || "0");
    const index = productsData.findIndex((p) => p.id === id);

    if (index !== -1) {
      productsData.splice(index, 1);
      return [200, { success: true, message: "Product deleted" }];
    }

    return [404, { success: false, message: "Product not found" }];
  });
}
