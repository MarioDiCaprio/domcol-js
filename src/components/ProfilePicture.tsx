import React from "react";
import {Avatar} from "@nextui-org/react";


interface ProfilePictureProps {
    bytes?: Uint8Array | null;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ bytes }) => {
    let src = "/user/generic-user.webp";
    if (bytes) {
        const base64 = Buffer.from(bytes).toString("base64");
        src = `data:image/png;base64, ${base64}`;
    }
    
    return <Avatar src={src} isBordered classNames={{ base: 'w-full h-full' }}/>
}


export default ProfilePicture;