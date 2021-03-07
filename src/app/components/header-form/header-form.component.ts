// Imports modules.
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent {
  @Input() header: { title: string; subtitle: string };
}
