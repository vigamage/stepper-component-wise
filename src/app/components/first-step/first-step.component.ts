import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {

  frmStepOne: FormGroup; // to deal with the form in the template

  frmStepOne$: Observable<FormGroup>;

  private frmStepOneOb$ = new BehaviorSubject<FormGroup>(null);
  frmStepOneListener$: Observable<FormGroup> = this.frmStepOneOb$.asObservable();

  constructor(private formBuilder: FormBuilder) {

    this.frmStepOne = this.formBuilder.group({
      name: ['', Validators.required]
    });

  }

  setFormOne(form: FormGroup) {
    this.frmStepOneOb$.next(form);
  }

  ngOnInit(): void {

    this.setFormOne(this.frmStepOne);

    this.frmStepOne$ = this.frmStepOneListener$.pipe(
      delay(0)
    );

  }

}
