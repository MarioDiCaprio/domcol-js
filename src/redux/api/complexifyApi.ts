import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {setAuthToken} from "@/redux/slices/authSlice";
import {HYDRATE} from "next-redux-wrapper";
import {RootState} from "@/redux/store";
import {AuthenticatedUserDTO, SingleValueDTO, UserDTO} from "@/redux/api/models/DTO";
import {LoginRequest, SignupRequest} from "@/redux/api/models/requests";


const SERVER_URL = process.env.NODE_ENV !== "production"? "http://localhost:8080" : "";


export const complexifyApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_URL,
        prepareHeaders: (headers, api) => {
            // authorization token
            const jwtToken = (api.getState() as RootState).authorization;
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
        
        login: builder.mutation<SingleValueDTO<string>, LoginRequest>({
            query: args => ({
                url: '/login',
                body: args,
                method: 'POST'
            }),
            async onQueryStarted(_request, { dispatch, queryFulfilled }) {
                queryFulfilled
                    .then(({ data: token }) => {
                        dispatch(setAuthToken(token.value));
                    })
                    .catch(() => {
                        dispatch(setAuthToken(null));
                    });
            }
        }),

        signup: builder.mutation<void, SignupRequest>({
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