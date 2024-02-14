export type SpyOf<T> = T &
    {
        [k in keyof T]: T[k] extends Function ? jasmine.Spy : never;
    };
export function autoSpy<T>(obj: new (...args: any[]) => T): SpyOf<T> {
    const res: SpyOf<T> = {} as any;
    const keys: any[] = Object.getOwnPropertyNames(obj.prototype);
    keys.forEach((key) => {
        // @ts-ignore
        res[key] = jasmine.createSpy(key);
    });
    return res;
}
