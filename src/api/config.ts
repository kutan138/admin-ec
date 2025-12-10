import { OpenAPI } from './core/OpenAPI';

// Cấu hình Base URL từ biến môi trường
// Mặc định sử dụng http://localhost:8000 nếu không có biến môi trường
OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// Có thể cấu hình thêm các options khác nếu cần
// OpenAPI.TOKEN = 'your-token';
// OpenAPI.WITH_CREDENTIALS = true;
