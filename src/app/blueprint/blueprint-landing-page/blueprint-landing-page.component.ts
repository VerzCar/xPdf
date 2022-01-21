import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blueprint-landing-page',
  templateUrl: './blueprint-landing-page.component.html',
  styleUrls: ['./blueprint-landing-page.component.scss'],
})
export class BlueprintLandingPageComponent implements OnInit {

  @Input() pageTitle: string;

  constructor() {
  }

  ngOnInit() {
  }

}
