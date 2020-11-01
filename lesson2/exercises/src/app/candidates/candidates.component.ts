import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
   missionName = "LaunchCode Moonshot"

   candidates = [
    {name: 'Rusty Rutabaga', data: {age: 5, mass: '0.75 kg', sidekick: 'Blake'}, image: 'assets/images/Blake.png'},
    {name: 'Tessa Tortoise', data: {age: 126, mass: '113 kg', sidekick: 'Sally'}, image: 'assets/images/Sally.png'},
    {name: 'Bernie Beagle', data: {age: 4, mass: '15 kg', sidekick: 'Paul'}, image: 'assets/images/Paul.png'},
    {name: 'Jackalope', data: {age: 45, mass: '33 kg', sidekick: 'Chris'}, image: 'assets/images/Chris.png'},
    {name: 'Champ', data: {age: 9, mass: '36 kg', sidekick: 'Carly'}, image: 'assets/images/Carly.png'}
  ];

  crew = [];

  constructor() { }

  ngOnInit() {
  }

  // Code the addToCrew function here:
addToCrew() {
  
}

  // BONUS: Code the changeMissionName function here:


}
// In candidates.component.ts, code an addToCrew function that takes an object as a parameter.
// If the candidate is NOT part of the crew, the function should push them into the crew array.Candidates who are already part of the crew should be ignored.
// In candidates.component.html, add a "Send on Mission" button next to the "Clear Data & Image" button.
// Add a click event to the button to call the addToCrew function.When clicked, pass the selected candidate as the argument.
// Under the "Selected Crew" section, use * ngFor to loop over the crew array and display each name.
