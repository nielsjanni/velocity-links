import { Component, OnInit, Input } from '@angular/core';
import {
  agencyUrls,
  nelnetbankUrls,
  IImplementationUrls,
  brazosUrls,
  sfiUrls,
  repoUrls,
  devToolsUrls,
  onCallUrls,
  supportUrls,
  nelnetUrls,
} from './links';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  davidSite = 'https://vo5280.onrender.com/';

  agency: IImplementationUrls = agencyUrls;
  nnb: IImplementationUrls = nelnetbankUrls;
  brazos: IImplementationUrls = brazosUrls;
  sfi: IImplementationUrls = sfiUrls;
  repos = repoUrls;
  devTools = devToolsUrls;
  onCall = onCallUrls;
  support = supportUrls;
  nelnet = nelnetUrls;

  ticketNumber: string = '';
  jiraBaseUrl = 'https://jira.cl.glhec.org/browse';
  jiraUrl: string = '';
  setTicketNumber() {}
  getValue(event: Event): string {
    const searchInput = (event.target as HTMLInputElement).value;
    this.ticketNumber = searchInput;
    this.jiraUrl = `${this.jiraBaseUrl}/AI-${this.ticketNumber}`;

    return searchInput;
  }
  launchTicket() {}
  constructor() {}

  ngOnInit(): void {}
}
