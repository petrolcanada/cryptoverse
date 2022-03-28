import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "2dcea9f0c4msh35d24cdc58b91d5p193367jsn1a0e92880275",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      //   query: (count) => createRequest(`/coins?limit=${count}`),
      query: (count) => ({
        url: `/coins?limit=${count}`,
        headers: cryptoApiHeaders,
      }),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => ({
        url: `/coin/${coinId}`,
        headers: cryptoApiHeaders,
      }),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
