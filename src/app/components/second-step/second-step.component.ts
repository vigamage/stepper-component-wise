import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  frmStepTwo: FormGroup; // to deal with the form in the template
  frmStepTwo$: Observable<FormGroup>;

  private frmStepTwoOb$ = new BehaviorSubject<FormGroup>(null);
  frmStepTwoListener$: Observable<FormGroup> = this.frmStepTwoOb$.asObservable();

  constructor(private formBuilder: FormBuilder) {

    this.frmStepTwo = this.formBuilder.group({
      address: ['', Validators.required]
    });

  }

  setFormTwo(form: FormGroup) {
    this.frmStepTwoOb$.next(form);
  }

  ngOnInit(): void {

    this.setFormTwo(this.frmStepTwo);

    this.frmStepTwo$ = this.frmStepTwoListener$.pipe(
      delay(0)
    )

  }

}
