
export interface INameComparer {
    compare(name1: string, name2: string): number
}

export abstract class NameComparer implements INameComparer {
    abstract compare(name1: string, name2: string): number
}
