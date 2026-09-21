import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.html',
  styleUrl: './description.css',
})
export class Description {
  //@ts-ignore
  form: FormControl;
}
