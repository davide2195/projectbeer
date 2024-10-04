import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavbarComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Beer Page');
    this.meta.updateTag({ name: 'description', content: 'Beer Page' });
    this.meta.updateTag({ name: 'og:title', content: 'My Beer Page' });

  }



 }
