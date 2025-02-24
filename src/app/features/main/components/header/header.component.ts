import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class MainHeader {

}
