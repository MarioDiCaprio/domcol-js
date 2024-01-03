import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface CanvasSnapshotState {
    shouldRender: boolean;
    mimeType: 'png' | 'jpeg' | 'webp';
}

const initialState: CanvasSnapshotState = {
    shouldRender: false,
    mimeType: 'webp'
}

export const canvasSnapshotSlice = createSlice({
    name: 'CanvasSnapshot',
    initialState,
    reducers: {
        
        setCanvasSnapshotState: (_state, action: PayloadAction<CanvasSnapshotState>) => {
            return action.payload
        },
        
        shouldRenderCanvasSnapshot: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                shouldRender: action.payload
            }
        }
        
    }
});

export const { setCanvasSnapshotState, shouldRenderCanvasSnapshot } = canvasSnapshotSlice.actions;