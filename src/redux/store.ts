import {configureStore} from "@reduxjs/toolkit";
import {equationsSlice} from "@/redux/slices/equationsSlice";
import {domainColoringSlice} from "@/redux/slices/domainColoringSlice";
import {riemannSphereSlice} from "@/redux/slices/riemannSphereSlice";


/**
 * This is the redux store for this application.
 */
export const store = configureStore({
    reducer: {
        equations: equationsSlice.reducer,
        domainColoring: domainColoringSlice.reducer,
        riemannSphere: riemannSphereSlice.reducer
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
