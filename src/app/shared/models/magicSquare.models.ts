export type MagicSquare = {
    [idx: string]: number
};

export type magicSquareSizeToSolutions = {
    [n: string]: MagicSquare[];
};

export interface IMagicSquareEvent {
    readonly magicSquareSize: number;
    readonly algorithm: string;
}