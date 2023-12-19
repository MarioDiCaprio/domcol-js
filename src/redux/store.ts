import {configureStore} from "@reduxjs/toolkit";
import {equationsSlice} from "@/redux/slices/equationsSlice";
import {domainColoringSlice} from "@/redux/slices/domainColoringSlice";
import {riemannSphereSlice} from "@/redux/slices/riemannSphereSlice";
import {authSlice} from "@/redux/slices/authSlice";
import {complexifyApi} from "@/redux/api/complexifyApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {graphSettingsSlice} from "@/redux/slices/graphSettingsSlice";


/**
 * This is the redux store for this application.
 */
export const store = configureStore({
    reducer: {
        [complexifyApi.reducerPath]: complexifyApi.reducer,
        authentication: authSlice.reducer,
        equations: equationsSlice.reducer,
        graphSettings: graphSettingsSlice.reducer,
        domainColoring: domainColoringSlice.reducer,
        riemannSphere: riemannSphereSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(complexifyApi.middleware),
});


setupListeners(store.dispatch)

/**
 * The redux store's root state. Used to access reducers with the `useSelector`
 * hook. Example:
 * ```tsx
 * const MyComponent: React.FC = () => {
 *     const equations = useSelector((state: RootState) => state.equations);
 *     ...
 * }
 * ```
 */
export type RootState = ReturnType<typeof store.getState>;
