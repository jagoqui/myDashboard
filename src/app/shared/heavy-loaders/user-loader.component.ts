import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>user works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoaderComponent { }
