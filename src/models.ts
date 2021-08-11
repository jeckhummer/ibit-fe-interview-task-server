export interface Deal {
    id: string;
    date: Date;
    value: number;
}

export type PaginatedData<T> = {
    data: T[],
    page: number,
    hasNextPage: boolean,
};