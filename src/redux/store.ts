import {configureStore} from "@reduxjs/toolkit";
import equationsReducer from "./slices/equationsSlice";
import {cookiesConsentSlice} from "./slices/cookiesConsentSlice";


/**
 * This is the redux store for this application.
 */
export const store = configureStore({
    reducer: {
        equations: equationsReducer,
        cookiesConsent: cookiesConsentSlice.reducer
    }
});

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
