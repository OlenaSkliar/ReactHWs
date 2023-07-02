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
    reduce<U>(accumulator: U, value: T): U;
}
//4
type MyPartial<T> = {
    [N in keyof T]: T[N]
}