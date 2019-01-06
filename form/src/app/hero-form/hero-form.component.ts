import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  model:Hero = new Hero(0,'','','');

  submitted = false;

  onSubmit() { console.log(1); }

  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value;
  }

}

