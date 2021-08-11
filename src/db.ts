import { Deal, PaginatedData } from './models';

let _data: Deal[] = [];

export function populate(data: Deal[]): void {
    _data = data;
}

export function read(page: number, pageSize: number): PaginatedData<Deal> {
    const start = pageSize * page;
    const end = pageSize * (page + 1);

    return {
        data: _data.slice(start, end),
        page,
        hasNextPage: _data.length > end
    };
}

export function add(deal: Deal): void {
    _data.push(deal);
}

export function remove(id: Deal['id']): void {
    _data = _data.filter(x => x.id !== id);
}
