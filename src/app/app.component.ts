import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:44303/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }
}
