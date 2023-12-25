export interface UserDTO {
    userId: string;
    username: string;
    graph: string[];
}

export interface AuthenticatedUserDTO extends UserDTO {
    email: string;
}

export interface GraphDTO {
    graphId: string;
    title?: string;
    author: string;
}

export interface SingleValueDTO<T> {
    value: T;
}