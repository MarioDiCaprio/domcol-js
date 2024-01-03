import React, {useEffect} from "react";
import {useThree} from "@react-three/fiber";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {shouldRenderCanvasSnapshot} from "@/redux/slices/canvasSnapshotSlice";


const CanvasSnapshot: React.FC = () => {
    const { gl } = useThree();
    
    const dispatch = useDispatch();
    const snapshotState = useSelector((state: RootState) => state.canvasSnapshot);

    useEffect(() => {
        if (snapshotState.shouldRender) {
            saveSnapshot();
            dispatch(shouldRenderCanvasSnapshot(false));
        }
    }, [snapshotState]);
    
    function saveSnapshot() {
        const strMime = 'image/' + snapshotState.mimeType;
        const strDownloadMime = "image/octet-stream";
        const imgData = gl.domElement.toDataURL(strMime);
        saveFile(imgData.replace(strMime, strDownloadMime), "complexify-snapshot." + snapshotState.mimeType);
    }
    
    function saveFile(data: string, filename: string) {
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.id = "canvas-snapshot-link"
        link.download = filename;
        link.href = data;
        link.click();
        document.body.removeChild(link);
    }
    
    return null
}

export default CanvasSnapshot;