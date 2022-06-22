import { Component, OnInit } from '@angular/core';
import { Hero2 } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers:string[] = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero2(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }

}
