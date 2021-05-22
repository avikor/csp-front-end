import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CSProblemString } from 'src/app/shared/CSProblem';
import { IMagicSquareEvent } from 'src/app/shared/models/magicSquare.models';
import { INQueensEvent } from 'src/app/shared/models/nQueens.models';
import { IPythagoreanTriple, IPythagoreanTripleEvent } from 'src/app/shared/models/pythagoreanTriple.models';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public pythSolutions$: Observable<IPythagoreanTriple[]> = new Observable<IPythagoreanTriple[]>();
  public magicSquareSolutions$: Observable<number[][]> = new Observable<number[][]>();
  public nQueensSolutions$: Observable<number[][]> = new Observable<number[][]>();


  public problem: CSProblemString = "Home";

  constructor(private solService: SolutionsService) { }

  ngOnInit() {
  }

  public get showHome(): boolean {
    return this.problem === "Home";
  }

  public get showPythagoreanTriples(): boolean {
    return this.problem === "PythagoreanTriples";
  }

  public get showMagicSquare(): boolean {
    return this.problem === "MagicSquare";
  }

  public get showNQueense(): boolean {
    return this.problem === "NQueens";
  }

  public toggleProblem(type: CSProblemString): void {
    this.problem = type; 
  }

  public onPythTripleEvent(pythTripleEvent: IPythagoreanTripleEvent): void {
    this.pythSolutions$ = this.solService.getPythagorianSolution(pythTripleEvent);
  }

  public onMagicSquareEvent(magicSquareEvent: IMagicSquareEvent): void {
    this.magicSquareSolutions$ = this.solService.getMagicSquareSolution(magicSquareEvent);
  }

  public onNQueensEvent(nQueensEvent: INQueensEvent): void {
    this.nQueensSolutions$ = this.solService.getNQueensSolution(nQueensEvent);
  }

}
