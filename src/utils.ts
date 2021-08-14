export function delay<T>(timeoutInMs: number, arg?: T): Promise<T> {
    return new Promise(resolve => setTimeout(() => resolve(arg as any), timeoutInMs));
}

export function range(length: number): number[] {
    return Array.from({ length }, (x, i) => i);
}