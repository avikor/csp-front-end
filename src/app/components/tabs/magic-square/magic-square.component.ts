import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CSP_ALGORITHMS, IAlgorithm } from 'src/app/shared/CSPAlgorithms';
import { hasIntegerSquareRootValidator } from 'src/app/shared/form_validators/square_root_validator';
import { IMagicSquareEvent } from 'src/app/shared/models/magicSquare.models';

@Component({
  selector: 'app-magic-square',
  templateUrl: './magic-square.component.html',
  styleUrls: ['./magic-square.component.scss']
})
export class MagicSquareComponent implements OnInit {
  @Input() magicSquares: number[][] | null = new Array<number[]>();

  @Output() magicSquareEvent: EventEmitter<IMagicSquareEvent> = new EventEmitter<IMagicSquareEvent>();

  public magicSquareForm: FormGroup = this.fb.group({
    magicSquareSize: [9, [ Validators.pattern("[1-9][0-9]*"), hasIntegerSquareRootValidator ] ],
    algorithm: ["hueBacktracking", Validators.required]
  })
  
  public sqrtMagicSquareSize: number = Math.sqrt(this.magicSquareForm.controls["magicSquareSize"].value);

  public algorithms: IAlgorithm[] = CSP_ALGORITHMS;

  get algoControl(): any {
    return this.magicSquareForm.controls["algorithm"];
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    const magicSquareSize: number = this.magicSquareForm.value["magicSquareSize"] as number;
    this.sqrtMagicSquareSize = Math.sqrt(magicSquareSize);
    this.magicSquareEvent.emit({ magicSquareSize: this.sqrtMagicSquareSize, algorithm: this.magicSquareForm.value["algorithm"] });
  }

}
