import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
    },
  }),
  tagTypes: ['Todos'],
  endpoints: () => ({}),
});
