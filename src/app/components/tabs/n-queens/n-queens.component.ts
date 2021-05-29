import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CSP_ALGORITHMS, IAlgorithm } from 'src/app/shared/CSPAlgorithms';
import { INQueensEvent } from 'src/app/shared/models/nQueens.models';

@Component({
  selector: 'app-n-queens',
  templateUrl: './n-queens.component.html',
  styleUrls: ['./n-queens.component.scss']
})
export class NQueensComponent implements OnInit {
  @Input() queenPositions: number[][] | null = new Array<number[]>();

  @Output() nQueensEvent: EventEmitter<INQueensEvent> = new EventEmitter<INQueensEvent>();

  private static readonly BLACK_CHESS_QUEEN_HTML_CODE: string = "&#9819;"
  private static readonly CELL_SIZE: number = 3.125; // in rem

  public nQueensSize: number = 8;

  public boardDimension: number = NQueensComponent.CELL_SIZE * this.nQueensSize;

  public nQueensForm: FormGroup = this.fb.group({
    nQueensSize: [this.nQueensSize, Validators.pattern("[1-9][0-9]*") ],
    algorithm: ["hueBacktracking", Validators.required]
  })

  public algorithms: IAlgorithm[] = CSP_ALGORITHMS;

  get algoControl(): any {
    return this.nQueensForm.controls["algorithm"];
  }

  hasQueen(val: boolean): string {
    return val ? NQueensComponent.BLACK_CHESS_QUEEN_HTML_CODE: "";
  }

  NumSeq(n: number): number[] {
    return Array.from(Array(n).keys())
  }

  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.nQueensSize = this.nQueensForm.value["nQueensSize"] as number;
    this.boardDimension = this.nQueensSize * NQueensComponent.CELL_SIZE;
    const nQueensEvent: INQueensEvent = this.nQueensForm.value as INQueensEvent;
    this.nQueensEvent.emit(nQueensEvent);
  }

}
