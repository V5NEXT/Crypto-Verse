import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '7120a36c3bmshe6191fdfe36e028p16a784jsne37840eef29b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url)=> ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) =>({
        getCryptos: builder.query({
            getCryptos: builder.query({
                query: () => createRequest('/coins')
            })
        })
    })

})

export const{
    useGetCryptosQuery,
} = cryptoApi;