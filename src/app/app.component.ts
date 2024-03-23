import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditComponent } from './shared/components/create-edit/create-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedClient: string = 'clientC';
  updateTheme(client: string) {
    this.selectedClient = client;
  }
}
