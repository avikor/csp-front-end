# CspFrontEnd

This project is the front end side of [csp_back_end](https://github.com/avikor/csp_back_end). </br>
It uses Angular and Angular Material to implement a web user interface for the [constraint_satisfaction](https://github.com/avikor/constraint_satisfaction) library. </br>
This web app currently allows users to find all solutions for three [Constraint Satisfaction Problems](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem): </br>

### Pythagorean Triples: 
Find all triples (x, y, z) such that x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup> and x < y < z and max{x, y, z} &lt; n.
</br>
<img src="https://freedocs.mi.hdm-stuttgart.de/Sd1/Ref/Statements/phythagorean.svg" width=200 height=200/>

### Magic Squares: 
Fill up an n x n square with distinct positive integers in the range (1, ..., n x n) such that each cell  
contains a different integer and the sum of the integers in each row, column, and diagonal is equal.
</br>
![](https://upload.wikimedia.org/wikipedia/commons/e/e4/Magicsquareexample.svg)  

### N Queens: 
Place n queens on an n x n chessboard so that no two queens threaten each other.
</br>
![](https://i.imgur.com/Ujq4LzZ.png)

Unlike printing to console, the solutions are presented to the user in a clear, graphical  manner.</br>

#### Pythagorean Triples:
[<img src="https://i.imgur.com/2GfdOFK.png" width=175 height=200/>](https://i.imgur.com/2GfdOFK.png)

#### Magic Squares: 
[<img src="https://i.imgur.com/Bs63v0h.png" width=120 height=200/>](https://i.imgur.com/Bs63v0h.png)
#### N Queens: 
[<img src="https://i.imgur.com/N6WikXv.png" width=90 height=200/>](https://i.imgur.com/N6WikXv.png)

## Further development
Currently the three problems are solved using only a Heuristic Backtracking Solver which uses the Minimum Remaining Values, Degree, and Least Constraining Value heuristics. </br>
The [constraint_satisfaction](https://github.com/avikor/constraint_satisfaction) library offers more examples of Constraint Satisfaction problems, as well as more solvers to solve them with. </br>
Further development could be made by offering users to define their own Constraint Satisfaction problems using a graphical interface, solving more examples of Constraint Satisfaction problems, or choosing which solver-algorithm to apply.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.