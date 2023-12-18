export interface OptionalQueryResult<T> {
    result?: T;
    isLoading: boolean;
    isError: boolean;
}