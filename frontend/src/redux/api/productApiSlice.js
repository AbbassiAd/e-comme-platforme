/* import { apiSlice } from "./apiSlice.js";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PRODUCTS_URL, UPLOAD_URL } from "../constants.js";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //create a new product api
    createProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    //update product by id api
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    //delete product by id api
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: "DELETE",
      }),
    }),

    //get all products api
    getAllProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}`,
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),

    //get product by id api
    getProductById: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      
      }),
    }),

    //get top products api
    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top-products`,
      }),
    }),

    //get top products api
    getNewProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/new-products`,
      }),
    }),
    // get Product By Categorie
    getProductByCategorie: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/category/${id}`,
      }),
    }),

    //add review to product api
    addReview: builder.mutation({
      query: ({ data, id }) => ({
        url: `${PRODUCTS_URL}/${id}/review`,
        method: "POST",
        body: data,
      }),
    }),

    //add image product api
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
   //filtred products api
 getFiltersProducts: builder.query({
  query: ({ checked, radio }) => ({
    url: `${PRODUCTS_URL}/filtered-products`,
    method: "POST",
    body: { checked, radio },
  }),
})
});


export const {
  
  useCreateProductMutation,
  useGetProductByCategorieQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddReviewMutation,
  useGetNewProductsQuery,
  useGetTopProductsQuery,
  useUploadProductImageMutation,
  useGetFiltersProductsQuery,
} = productApiSlice;
 */
import { apiSlice } from "./apiSlice.js";
import { PRODUCTS_URL, UPLOAD_URL } from "../constants.js";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //create a new product api
    createProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    //update product by id api
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    //delete product by id api
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: "DELETE",
      }),
    }),

    //get all products api
    getAllProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}`,
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),

    //get product by id api
    getProductById: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      }),
    }),

    //get top products api
    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top-products`,
      }),
    }),

    //get top products api
    getNewProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/new-products`,
      }),
    }),

    //add review to product api
    addReview: builder.mutation({
      query: ({ data, id }) => ({
        url: `${PRODUCTS_URL}/${id}/review`,
        method: "POST",
        body: data,
      }),
    }),

    //add image product api
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    
    // get Product By Categorie
    getProductByCategorie: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/category/${id}`,
      }),
    }),

    //filtred products api
    getFiltersProducts: builder.query({
      query: ({ checked, radio }) => ({
        url: `${PRODUCTS_URL}/filtered-products`,
        method: "POST",
        body: { checked, radio },
      }),
    }),

    // //filter products by categories api
    // getProductByCategories: builder.query({
    //   query: (chacked) => ({
    //     url: `${PRODUCTS_URL}/products-by-categories`,
    //     method: "POST",
    //     body: chacked,
    //   }),
    // }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductByCategorieQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddReviewMutation,
  useGetNewProductsQuery,
  useGetTopProductsQuery,
  useUploadProductImageMutation,
  useGetFiltersProductsQuery,
  // useGetProductByCategoriesQuery
} = productApiSlice;
