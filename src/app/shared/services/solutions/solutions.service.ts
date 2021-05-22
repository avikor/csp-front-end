import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IMagicSquareEvent, MagicSquare } from '../../models/magicSquare.models';
import { INQueensEvent, NQueens } from '../../models/nQueens.models';
import { IPythagoreanTriple, IPythagoreanTripleEvent } from '../../models/pythagoreanTriple.models';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  constructor(private apiService: ApiService) { }

  public getPythagorianSolution(pythTripleEvent: IPythagoreanTripleEvent): Observable<IPythagoreanTriple[]> {
    return this.apiService.getPythagorianSolutionServer(pythTripleEvent).pipe(
      map(data => data[pythTripleEvent.upperBound]),
      tap((data: IPythagoreanTriple[]) => {
        data.sort((a: IPythagoreanTriple, b: IPythagoreanTriple) => {
          if(a.x < b.x || a.x == b.x && a.y < b.y || a.x == b.x && a.y == b.y && a.z < b.z ) {
            return -1;
          }
          else {
            return 1;
          }
        });
        }),
        tap((data: IPythagoreanTriple[]) => {
          let i: number = 0;
          data.forEach(triple => triple.id = ++i);
        }));
  }

  public getMagicSquareSolution(magicSquareEvent: IMagicSquareEvent): Observable<number[][]> {
    return this.apiService.getMagicSquareSolutionServer(magicSquareEvent).pipe(
      map(data => data[magicSquareEvent.magicSquareSize]),
      map((data: MagicSquare[]) => {
        const arr: number[][] = data.map(item => Object.values(item));
        return arr;
      })
    );
  }

  public getNQueensSolution(nQueensEvent: INQueensEvent): Observable<number[][]> {
    return this.apiService.getNQueensSolutionServer(nQueensEvent).pipe(
      map(data => data[nQueensEvent.nQueensSize]),
      map((data: NQueens[]) => {
        const arr: number[][] = data.map(item => Object.values(item));
        return arr;
      })
    );
  }

}
