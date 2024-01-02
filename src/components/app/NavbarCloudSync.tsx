"use client"

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useUserBearerQuery} from "@/redux/api/complexifyApi";
import {useDispatch, useSelector} from "react-redux";
import {setAuthToken} from "@/redux/slices/authSlice";
import {RootState} from "@/redux/store";
import Link from "next/link";
import { MdCloud as CloudIcon } from "react-icons/md";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import ProfilePicture from "@/components/ProfilePicture";
import GraphCard from "@/components/GraphCard";


const RenderWhenAuthenticated: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {data: user, isLoading, isError} = useUserBearerQuery();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    function logout() {
        dispatch(setAuthToken(null));
        router.push("/");
    }
    
    if (isLoading) {
        // TODO Implement loading icon
        return <></>
    }
    
    if (isError || !user) {
        // TODO Handle login error
        dispatch(setAuthToken(null))
        return <></>
    }
    
    return (
        <div>
            <Button isIconOnly size="sm" onPress={onOpen}>
                <CloudIcon />
            </Button>
            <Modal size="2xl" placement="top" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    
                    <ModalHeader className="flex items-center gap-3">
                        <div className="w-6 h-6">
                            <ProfilePicture bytes={user.profilePicture} />
                        </div>
                        <span>
                            { user.username }
                        </span>
                    </ModalHeader>
                    
                    <ModalBody>
                        <div className="py-5 flex flex-wrap gap-5">
                            {user.graphs.map(graphId => (
                                <GraphCard graphId={graphId} />
                            ))}
                        </div>
                    </ModalBody>
                    
                    <ModalFooter>
                        <Button color="danger" onPress={logout}>
                            Logout
                        </Button>
                        <Button color="primary" variant="light">
                            Account Settings
                        </Button>
                    </ModalFooter>
                    
                </ModalContent>
            </Modal>
        </div>
    )
}

const NavbarCloudSync: React.FC = () => {
    const [isClient, setIsClient] = useState<boolean>(false);
    const authToken = useSelector((state: RootState) => state.authorization);

    useEffect(() => {
        setIsClient(true)
    }, []);
    
    if (!authToken || !isClient) {
        return (
            <Link href={"/login"} className="text-sm hover:text-zinc-400 duration-300">
                Login
            </Link>
        );
    }
    
    return <RenderWhenAuthenticated />
}

export default NavbarCloudSync;