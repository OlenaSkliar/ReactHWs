//1.String
//2
interface MyInterface {
    howIDoIt: string;
    simeArray: (number | string)[];
    withData: [{ howIDoIt: string, simeArray: (number | string)[] }];
}
//3
interface MyArray<T> {
    [N: number]: T;
    reduce(accum: T, item: T): T[];
}

//4
type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}