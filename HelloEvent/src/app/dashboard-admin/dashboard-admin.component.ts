import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  userCount: number = 0;
  eventCount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUserCount();
    this.getEventCount();
  }

  getUserCount() {
    this.http.get<number>('/api/dashbord/users').subscribe(
      (count) => this.userCount = count,
      (error) => console.error('Error fetching user count', error)
    );
  }

  getEventCount() {
    this.http.get<number>('/api/dashbord/events').subscribe(
      (count) => this.eventCount = count,
      (error) => console.error('Error fetching event count', error)
    );
  }
}
