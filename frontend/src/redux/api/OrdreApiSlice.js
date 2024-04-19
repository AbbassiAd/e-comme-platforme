import { apiSlice } from "./apiSlice.js";
import { ORDRE_URL } from "../constants.js";

export const ordreApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerOrdre: builder.mutation({
            query: (data) => ({
                url: `${ORDRE_URL}`,
                method: "POST",
                body: data,
            }),
        }),
        getOrdre: builder.query({
            query: () => ({ 
                url: `${ORDRE_URL}`, 
                method: "GET",
            }),
        }),
    }),
});
