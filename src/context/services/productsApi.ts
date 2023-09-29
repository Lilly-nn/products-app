import { ProductType } from '@/types/productsType';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type ApiResponse = {
    limit: number;
    products: ProductType[];
    skip: number;
    total: number;
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
    endpoints: (builder) => ({

        getProductsByCategory: builder.query<ApiResponse, string>({
            query: (category) => `/category/${category}`,
        }),
        getAllProducts: builder.query<ApiResponse, string>({
            query: () => `/?limit=100`,
        }),
        getOneProduct: builder.query<ProductType, string>({
            query: (id) => `/${id}`,
        }),
    }),
})

export const { useGetOneProductQuery, useGetProductsByCategoryQuery, useGetAllProductsQuery } = productsApi;