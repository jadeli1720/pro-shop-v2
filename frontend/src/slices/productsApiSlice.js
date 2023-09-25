import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//allows us to use the query in the component without having to do a fetch or axios requests
		getProducts: builder.query({
			query: () => ({
				url: PRODUCTS_URL,
			}),
			//how long to keep the data in the cache in seconds
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useGetProductsQuery } = productsApiSlice;
