import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const CryptoApiHeaders = {
  "X-RapidAPI-Key": "a73b53d376msh158f8504f381d79p125284jsn9c43cc712c15",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
const createRequest = (url) => ({ url, headers: CryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/"),
    }),
  }),
});
export const { useGetCryptosQuery } = cryptoApi;
