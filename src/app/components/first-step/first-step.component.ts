import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {

  frmStepOne: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.frmStepOne = this.formBuilder.group({
      name: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

}
