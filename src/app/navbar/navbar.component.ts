import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RightChatComponent } from '../right-chat/right-chat.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,RightChatComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
