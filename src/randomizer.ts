import { range } from "./utils";
import { Deal } from "./models";

export function getRandomDealsSet(length: number): Deal[] {
    const unixNow = +new Date();

    return range(length).map(i => ({
        id: i + 1 + '',
        date: new Date(unixNow + 2000 * i + Math.random() * 1000),
        value: Math.round(Math.random() * 120 * 100) / 100,
    }));
}