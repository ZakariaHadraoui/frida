import { Component } from '@angular/core';
import { RightChatComponent } from '../right-chat/right-chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RightChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
