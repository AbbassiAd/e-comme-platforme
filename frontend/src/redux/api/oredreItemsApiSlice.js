import { apiSlice } from "./apiSlice";
import { ORDRE_ITEMS_URL } from "../constants.js";
export const ordreItemsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrdreItems: builder.query({
            query: () => ({
                url: `${ORDRE_ITEMS_URL}`,
                method: "GET",
            }),
        }),
        CreateOrdreItems: builder.mutation({
            query: (data) => ({
                url: `${ORDRE_ITEMS_URL}`,
                method: "POST",
                body: data,

            })
        })
    }),
})
export const {
    useCreateOrdreItemsMutation,
    useGetOrdreItemsQuery,
}= ordreItemsApiSlice;