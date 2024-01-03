import React from "react";
import {Button} from "@nextui-org/react";
import { FaCamera as CameraIcon } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {setCanvasSnapshotState} from "@/redux/slices/canvasSnapshotSlice";


const EditorSnapshotLink: React.FC = () => {
    const dispatch = useDispatch();
    
    function takeSnapshot() {
        dispatch(setCanvasSnapshotState({
            shouldRender: true,
            mimeType: "png"
        }))
    }
    
    return (
        <div>
            <Button isIconOnly variant="light" onPress={takeSnapshot} className="text-2xl">
                <CameraIcon />
            </Button>
        </div>
    )
}

export default EditorSnapshotLink;