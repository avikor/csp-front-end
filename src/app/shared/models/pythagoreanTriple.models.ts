export interface IPythagoreanTriple {
    id?: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
  }

export type upperBoundToSolutions = {
  [n: string]: IPythagoreanTriple[];
};

export interface IPythagoreanTripleEvent {
  readonly upperBound: number;
  readonly algorithm: string;
}