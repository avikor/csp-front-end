export interface IAlgorithm {
    name: string;
    value: string;
  }
  
  // TODO: send it from server
  export const CSP_ALGORITHMS: IAlgorithm[] = [
      { name: "Backtracking", value: "backtracking" },
      { name: "Heuristic Backtracking", value: "hueBacktracking" },
      { name: "Heuristic Backtracking with Forward Checking", value: "hueBacktrackingForwardChecking" },
      { name: "Heuristic Backtracking with Maintaining Arc Aonsistency", value: "hueBacktrackingMAC" },
      { name: "Minimum Conflicts", value: "minConflicts" },
      { name: "Constraints Weighting", value: "constraintsWeighting" },
      { name: "Simulated Annealing", value: "simulatedAnnealing" },
      { name: "Random Restart First Choice Hill Climbing", value: "randomRestartFirstChoiceHillClimbing" },
      { name: "Genetic Local Search", value: "geneticLocalSearch" },
  ];