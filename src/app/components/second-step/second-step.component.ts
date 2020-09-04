import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  frmStepTwo: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.frmStepTwo = this.formBuilder.group({
      address: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

}
