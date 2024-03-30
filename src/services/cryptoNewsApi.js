import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoNewsApiHeaders = {
  "X-RapidAPI-Key": "a73b53d376msh158f8504f381d79p125284jsn9c43cc712c15",
  "X-RapidAPI-Host": "google-news13.p.rapidapi.com",
};

const baseUrl = "https://google-news13.p.rapidapi.com/business";
const createRequest = (url) => ({ url, headers: CryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: () => createRequest(`/google-news/search/business`),
    }),
  }),
});

export const { useGetCryptosNewsQuery } = cryptoNewsApi;
