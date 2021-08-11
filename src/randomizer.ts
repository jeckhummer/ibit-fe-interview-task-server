import { Deal } from "./models";

export function getRandomDealsSet(): Deal[] {
    return [
        {
            id: '1',
            date: new Date(),
            value: 88.9
        },
        {
            id: '2',
            date: new Date(),
            value: 89.5
        },
        {
            id: '3',
            date: new Date(),
            value: 79.2
        }
    ];
}