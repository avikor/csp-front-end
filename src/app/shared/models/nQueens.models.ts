export type NQueens = {
    [idx: string]: number
};

export type nQueensSizeToSolutions = {
    [n: string]: NQueens[];
};

export interface INQueensEvent {
    readonly nQueensSize: number;
    readonly algorithm: string;
}