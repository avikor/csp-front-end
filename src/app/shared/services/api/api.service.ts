import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IMagicSquareEvent, magicSquareSizeToSolutions } from '../../models/magicSquare.models';
import { INQueensEvent, nQueensSizeToSolutions } from '../../models/nQueens.models';
import { IPythagoreanTripleEvent, upperBoundToSolutions } from '../../models/pythagoreanTriple.models';


const API_URL: string = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getPythagorianSolutionServer(pythTripleEvent: IPythagoreanTripleEvent): Observable<upperBoundToSolutions> {
    return this.http.get<upperBoundToSolutions>
    (API_URL + '/resources/pythagorianSolutions/' + pythTripleEvent.upperBound.toString() + "/hueBacktracking");
    // return this.http.get<upperBoundToSolutions>
    // (API_URL + '/resources/pythagorianSolutions/' + pythTripleEvent.upperBound.toString() + "/" + pythTripleEvent.algorithm);
  }

  public getMagicSquareSolutionServer(magicSquareEvent: IMagicSquareEvent): Observable<magicSquareSizeToSolutions> {
    return this.http.get<magicSquareSizeToSolutions>
    (API_URL + '/resources/magicSquareSolutions/' + magicSquareEvent.magicSquareSize.toString() + "/hueBacktracking");
    // return this.http.get<magicSquareSizeToSolutions>
    // (API_URL + '/resources/magicSquareSolutions/' + magicSquareEvent.magicSquareSize.toString() + "/" + magicSquareEvent.algorithm);
  }

  public getNQueensSolutionServer(nQueensEvent: INQueensEvent): Observable<nQueensSizeToSolutions> {
    return this.http.get<nQueensSizeToSolutions>
    (API_URL + '/resources/nQueensSolutions/' + nQueensEvent.nQueensSize.toString() + "/hueBacktracking");
    // return this.http.get<nQueensSizeToSolutions>
    // (API_URL + '/resources/nQueensSolutions/' + nQueensEvent.nQueensSize.toString() + "/" + nQueensEvent.algorithm);
  }

}
