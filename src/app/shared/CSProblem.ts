export const enum CSProblem {
    Home,
    PythagoreanTriples,
    MagicSquare,
    NQueens,
}


export type CSProblemString = keyof typeof CSProblem;