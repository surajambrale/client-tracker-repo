import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-end';
}
