import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  responseData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.callApi();
  }

  callApi() {
    this.apiService.getTest().subscribe({
      next: (res) => {
        console.log('API Response:', res);
        this.responseData = res;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
