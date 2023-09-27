import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';


//injecting endpoints in the parent apiSlice
export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//post request
		login: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
			}),
		}),
	}),
});

export const { useLoginMutation } = userApiSlice;
