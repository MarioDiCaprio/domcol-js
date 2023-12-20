import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {setAuthToken} from "@/redux/slices/authSlice";
import {HYDRATE} from "next-redux-wrapper";
import {RootState} from "@/redux/store";
import {AuthenticatedUserDTO, AuthTokenDTO, UserDTO} from "@/redux/api/models/DTO";


const SERVER_URL = process.env.NODE_ENV !== "production"? "http://localhost:8080" : "";


export const complexifyApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_URL,
        prepareHeaders: (headers, api) => {
            // authorization token
            const jwtToken = (api.getState() as RootState).authentication?.token;
            if (jwtToken) {
                headers.set('Authorization', `Bearer ${jwtToken}`);
            }
            // finalize
            return headers;
        },
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: builder => ({
        
        login: builder.mutation<AuthTokenDTO, { username: string, password: string }>({
            query: args => ({
                url: '/login',
                headers: {
                    "Authorization": "Basic " + Buffer.from(args.username + ':' + args.password).toString('base64')
                },
                method: 'POST'
            }),
            async onQueryStarted(request, { dispatch, queryFulfilled }) {
                queryFulfilled
                    .then(({ data: token }) => {
                        dispatch(setAuthToken(token));
                    })
                    .catch(() => {
                        dispatch(setAuthToken(null));
                    });
            }
        }),

        signup: builder.mutation<void, { username: string, email: string, password: string }>({
            query: args => ({
                url: '/signup',
                body: args,
                method: 'POST'
            })
        }),

        userBearer: builder.query<UserDTO, void>({
            query: () => ({
                url: '/user/bearer',
                method: 'GET'
            })
        }),

        userBearerSensitive: builder.mutation<AuthenticatedUserDTO, void>({
            query: () => ({
                url: '/user/bearer',
                method: 'POST'
            })
        }),
        
    })
})


export const {
    useLoginMutation,
    useSignupMutation,
    useUserBearerQuery,
    useUserBearerSensitiveMutation,
} = complexifyApi