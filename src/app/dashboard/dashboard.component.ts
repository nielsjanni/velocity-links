import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  ICollectionUrls,
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

  defaultJiraProject = 'AI';

  jiraTicketForm: FormGroup = new FormGroup({
    jiraProject: new FormControl(`${this.defaultJiraProject}`),
  });

  jiraBaseUrl = 'https://jira.cl.glhec.org/browse';
  jiraProject: string = '';
  ticketNumber: string = '';
  jiraUrl: string = '';

  buildJiraUrl(event: Event): string {
    this.ticketNumber = (event.target as HTMLInputElement).value;
    this.jiraUrl = `${this.jiraBaseUrl}/${this.jiraProject}-${this.ticketNumber}`;
    return this.ticketNumber;
  }

  constructor() {}

  ngOnInit(): void {
    this.jiraProject = this.defaultJiraProject;
  }
}
