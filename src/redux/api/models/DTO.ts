export interface UserDTO {
    userId: string;
    username: string;
    graphs: string[];
    profilePicture: Uint8Array;
}

export interface AuthenticatedUserDTO extends UserDTO {
    email: string;
}

export interface GraphDTO {
    graphId: string;
    title?: string;
    equations: string[];
    author: string;
}

export interface SingleValueDTO<T> {
    value: T;
}