import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CSP_ALGORITHMS, IAlgorithm } from 'src/app/shared/CSPAlgorithms';
import { IPythagoreanTriple, IPythagoreanTripleEvent } from 'src/app/shared/models/pythagoreanTriple.models';

@Component({
  selector: 'app-pythagorean-triples',
  templateUrl: './pythagorean-triples.component.html',
  styleUrls: ['./pythagorean-triples.component.scss']
})
export class PythagoreanTriplesComponent implements OnInit {
  @Input() pythTableDataSource: IPythagoreanTriple[] | null = new Array<IPythagoreanTriple>();

  @Output() pythTripleEvent: EventEmitter<IPythagoreanTripleEvent> = new EventEmitter<IPythagoreanTripleEvent>();

  public pythForm: FormGroup = this.fb.group({
    upperBound: [5, Validators.pattern("[1-9][0-9]*")],
    algorithm: ["hueBacktracking", Validators.required]
  });

  public algorithms: IAlgorithm[] = CSP_ALGORITHMS;

  public ptyhDisplayedColumns: string[] = ["id", "x", "y", "z"];

  get algoControl(): any {
    return this.pythForm.controls["algorithm"];
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    const pythTripleEvent: IPythagoreanTripleEvent = this.pythForm.value as IPythagoreanTripleEvent;
    this.pythTripleEvent.emit(pythTripleEvent);
  }

}
