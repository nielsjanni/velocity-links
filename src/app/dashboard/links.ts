export interface IUrl {
  url: string;
  text: string;
}
export interface IImplementationUrls {
  local: {
    onboarding: IUrl;
    cpm: IUrl;
    bom: IUrl;
    auth?: IUrl;
  };
  develop: {
    onboarding: IUrl;
    cpm: IUrl;
    bom: IUrl;
    auth?: IUrl;
  };
  staging: {
    onboarding: IUrl;
    cpm: IUrl;
    bom: IUrl;
    auth?: IUrl;
  };
  prod: {
    onboarding: IUrl;
    cpm: IUrl;
    bom: IUrl;
    auth?: IUrl;
  };
}

export interface ICollectionUrls {
  [key: string]: IUrl;
}

export const agencyUrls: IImplementationUrls = {
  local: {
    onboarding: {
      url: 'http://localhost:8080/onboarding.agency.velocity.nelnet.io',
      text: 'Local - Onboarding',
    },
    cpm: {
      url: 'http://localhost:8080/customer.agency.velocity.nelnet.io',
      text: 'Local - CPM',
    },
    bom: {
      url: 'http://localhost:8080/backoffice.agency.velocity.nelnet.io',
      text: 'Local - BOM',
    },
    auth: {
      url: 'http://localhost:8080/auth.agency.velocity.nelnet.io',
      text: 'Local - Auth',
    },
  },
  develop: {
    onboarding: {
      url: 'https://onboarding.agency.develop.velocity.nelnet.io/',
      text: 'Dev - Onboarding',
    },
    cpm: {
      url: 'https://customer.agency.develop.velocity.nelnet.io/',
      text: 'Dev - CPM',
    },
    bom: {
      url: 'https://backoffice.agency.develop.velocity.nelnet.io/',
      text: 'Dev - BOM',
    },
    auth: {
      url: 'https://auth.agency.develop.velocity.nelnet.io/',
      text: 'Dev - Auth',
    },
  },
  staging: {
    onboarding: {
      url: 'https://onboarding.agency.staging.velocity.nelnet.io/',
      text: 'Staging - Onboarding',
    },
    cpm: {
      url: 'https://customer.agency.staging.velocity.nelnet.io/',
      text: 'Staging - CPM',
    },
    bom: {
      url: 'https://backoffice.agency.staging.velocity.nelnet.io/',
      text: 'Staging - BOM',
    },
    auth: {
      url: 'https://auth.agency.staging.velocity.nelnet.io/',
      text: 'Staging - Auth',
    },
  },
  prod: {
    onboarding: {
      url: 'https://onboarding.agency.velocity.nelnet.io/',
      text: 'Prod - Onboarding',
    },
    cpm: {
      url: 'https://customer.agency.velocity.nelnet.io/',
      text: 'Prod - CPM',
    },
    bom: {
      url: 'https://backoffice.agency.velocity.nelnet.io/',
      text: 'Prod - BOM',
    },
    auth: {
      url: 'https://auth.agency.velocity.nelnet.io/',
      text: 'Prod - Auth',
    },
  },
};
export const nelnetbankUrls: IImplementationUrls = {
  local: {
    onboarding: {
      url: 'http://localhost:8080/onboarding.nelnetbank.velocity.nelnet.io',
      text: 'Local - Onboarding',
    },
    cpm: {
      url: 'http://localhost:8080/customer.nelnetbank.velocity.nelnet.io',
      text: 'Local - CPM',
    },
    bom: {
      url: 'http://localhost:8080/backoffice.nelnetbank.velocity.nelnet.io',
      text: 'Local - BOM',
    },
    auth: {
      url: 'http://localhost:8080/auth.nelnetbank.velocity.nelnet.io',
      text: 'Local - Auth',
    },
  },
  develop: {
    onboarding: {
      url: 'https://onboarding.nelnetbank.develop.velocity.nelnet.io/',
      text: 'Dev - Onboarding',
    },
    cpm: {
      url: 'https://customer.nelnetbank.develop.velocity.nelnet.io/',
      text: 'Dev - CPM',
    },
    bom: {
      url: 'https://backoffice.nelnetbank.develop.velocity.nelnet.io/',
      text: 'Dev - BOM',
    },
    auth: {
      url: 'https://auth.nelnetbank.develop.velocity.nelnet.io/',
      text: 'Dev - Auth',
    },
  },
  staging: {
    onboarding: {
      url: 'https://onboarding.nelnetbank.staging.velocity.nelnet.io/',
      text: 'Staging - Onboarding',
    },
    cpm: {
      url: 'https://customer.nelnetbank.staging.velocity.nelnet.io/',
      text: 'Staging - CPM',
    },
    bom: {
      url: 'https://backoffice.nelnetbank.staging.velocity.nelnet.io/',
      text: 'Staging - BOM',
    },
    auth: {
      url: 'https://auth.nelnetbank.staging.velocity.nelnet.io/',
      text: 'Staging - Auth',
    },
  },
  prod: {
    onboarding: {
      url: 'https://onboarding.nelnetbank.velocity.nelnet.io/',
      text: 'Prod - Onboarding',
    },
    cpm: {
      url: 'https://customer.nelnetbank.velocity.nelnet.io/',
      text: 'Prod - CPM',
    },
    bom: {
      url: 'https://backoffice.nelnetbank.velocity.nelnet.io/',
      text: 'Prod - BOM',
    },
    auth: {
      url: 'https://auth.nelnetbank.velocity.nelnet.io/',
      text: 'Prod - Auth',
    },
  },
};
export const brazosUrls: IImplementationUrls = {
  local: {
    onboarding: {
      url: 'http://localhost:8080/onboarding.brazos.velocity.nelnet.io',
      text: 'Local - Onboarding',
    },
    cpm: {
      url: 'http://localhost:8080/customer.brazos.velocity.nelnet.io',
      text: 'Local - CPM',
    },
    bom: {
      url: 'http://localhost:8080/backoffice.brazos.velocity.nelnet.io',
      text: 'Local - BOM',
    },
    auth: {
      url: 'http://localhost:8080/auth.brazos.velocity.nelnet.io',
      text: 'Local - Auth',
    },
  },
  develop: {
    onboarding: {
      url: 'https://onboarding.brazos.develop.velocity.nelnet.io/',
      text: 'Dev - Onboarding',
    },
    cpm: {
      url: 'https://customer.brazos.develop.velocity.nelnet.io/',
      text: 'Dev - CPM',
    },
    bom: {
      url: 'https://backoffice.brazos.develop.velocity.nelnet.io/',
      text: 'Dev - BOM',
    },
    auth: {
      url: 'https://auth.brazos.develop.velocity.nelnet.io/',
      text: 'Dev - Auth',
    },
  },
  staging: {
    onboarding: {
      url: 'https://onboarding.brazos.staging.velocity.nelnet.io/',
      text: 'Staging - Onboarding',
    },
    cpm: {
      url: 'https://customer.brazos.staging.velocity.nelnet.io/',
      text: 'Staging - CPM',
    },
    bom: {
      url: 'https://backoffice.brazos.staging.velocity.nelnet.io/',
      text: 'Staging - BOM',
    },
    auth: {
      url: 'https://auth.brazos.staging.velocity.nelnet.io/',
      text: 'Staging - Auth',
    },
  },
  prod: {
    onboarding: {
      url: 'https://onboarding.brazos.velocity.nelnet.io/',
      text: 'Prod - Onboarding',
    },
    cpm: {
      url: 'https://customer.brazos.velocity.nelnet.io/',
      text: 'Prod - CPM',
    },
    bom: {
      url: 'https://backoffice.brazos.velocity.nelnet.io/',
      text: 'Prod - BOM',
    },
    auth: {
      url: 'https://auth.brazos.velocity.nelnet.io/',
      text: 'Prod - Auth',
    },
  },
};
export const sfiUrls: IImplementationUrls = {
  local: {
    onboarding: {
      url: 'http://localhost:8080/onboarding.sfi.velocity.nelnet.io',
      text: 'Local - Onboarding',
    },
    cpm: {
      url: 'http://localhost:8080/onboarding.sfi.velocity.nelnet.io',
      text: 'Local - CPM',
    },
    bom: {
      url: 'http://localhost:8080/backoffice.sfi.velocity.nelnet.io',
      text: 'Local - BOM',
    },
  },
  develop: {
    onboarding: {
      url: 'https://onboarding.sfi.develop.velocity.nelnet.io/',
      text: 'Dev - Onboarding',
    },
    cpm: {
      url: 'https://onboarding.sfi.develop.velocity.nelnet.io/',
      text: 'Dev - CPM',
    },
    bom: {
      url: 'https://backoffice.sfi.develop.velocity.nelnet.io/',
      text: 'Dev - BOM',
    },
  },
  staging: {
    onboarding: {
      url: 'https://onboarding.sfi.staging.velocity.nelnet.io/',
      text: 'Staging - Onboarding',
    },
    cpm: {
      url: 'https://onboarding.sfi.staging.velocity.nelnet.io/',
      text: 'Staging - CPM',
    },
    bom: {
      url: 'https://backoffice.sfi.staging.velocity.nelnet.io/',
      text: 'Staging - BOM',
    },
  },
  prod: {
    onboarding: {
      url: 'https://apply.sfi.velocity.nelnet.io/',
      text: 'Prod - Onboarding',
    },
    cpm: {
      url: 'https://apply.sfi.velocity.nelnet.io/',
      text: 'Prod - CPM',
    },
    bom: {
      url: 'https://backoffice.sfi.velocity.nelnet.io/',
      text: 'Prod - BOM',
    },
  },
};

export const repoUrls = {
  agency: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-deployment-agency',
    text: 'Agency',
  },
  brazos: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-deployment-brazos/',
    text: 'Brazos',
  },
  nelnetBank: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-deployment-esl-nelnetbank',
    text: 'NNB',
  },
  sfi: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-deployment-sfi',
    text: 'SFI',
  },
  backOffice: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-deployment-back-office/',
    text: 'BOM',
  },
  customerPortal: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-deployment-customer-portal',
    text: 'CPM',
  },
  commonLine: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-deployment-commonline',
    text: 'CommonLine',
  },
  iam: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-iam/blob/develop/src/IamService.ts',
    text: 'IAM',
  },
  disbursement: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-disbursement',
    text: 'Disbursement',
  },
  entity: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-entity/blob/develop/src/EntityService.ts',
    text: 'Entity',
  },
  flow: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-flow/blob/develop/src/FlowService.ts',
    text: 'Flow',
  },
  query: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-query/blob/develop/src/QueryService.ts',
    text: 'Query',
  },
  task: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-task/blob/develop/src/TaskService.ts',
    text: 'Task',
  },
  templateEngine: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-template-engine/blob/develop/src/TemplateEngineService.ts',
    text: 'Template Engine',
  },
  documentManager: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-document-manager/blob/develop/src/DocumentManagerService.ts',
    text: 'Document Manager',
  },
  documentSigner: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-document-signer/blob/develop/src/DocumentSignerService.ts',
    text: 'Document Signer',
  },
  amortization: {
    url: 'https://github.com/nelnet-velocity/nni-velocity-svc-amortization/blob/develop/src/AmortizationService.ts',
    text: 'Amortization',
  },
};
export const devToolsUrls = {
  tokenPortalDevelop: {
    url: 'https://token.nelnet.develop.velocity.nelnet.io/',
    text: 'Token Portal - Develop',
  },
  tokenPortalStaging: {
    url: 'https://token.nelnet.staging.velocity.nelnet.io/',
    text: 'Token Portal - Staging',
  },
  tokenPortalProd: {
    url: 'https://token.nelnet.velocity.nelnet.io/',
    text: 'Token Portal - Prod',
  },
  jumperPortalStaging: {
    url: 'https://jumper.firstmark.staging.velocity.nelnet.io',
    text: 'Jumper Portal - Staging',
  },
  commonLineDemoDevelop: {
    url: 'https://demo.testcommonline.develop.velocity.nelnet.io',
    text: 'CL Demo - Develop',
  },
};

export const onCallUrls = {
  pagerDuty: {
    url: 'https://5280.pagerduty.com/users/PWZORTF/on-call',
    text: 'PagerDuty',
  },
  everbridge: {
    url: 'https://member.everbridge.net/892807736723781/login/sso',
    text: 'Everbridge',
  },
  dataDogMonitor: {
    url: 'https://app.datadoghq.com/monitors/manage',
    text: 'DataDog - Monitors',
  },
  onCallProdSupport: {
    url: 'https://confluence.glhec.org/confluence/pages/viewpage.action?pageId=318570934',
    text: 'On Call Prod Support',
  },
  supportDiagram: {
    url: 'https://confluence.glhec.org/confluence/display/VO/VO+Production+Support+Procedure+Diagram',
    text: 'Support Diagram',
  },
  contactListExternal: {
    url: 'https://confluence.glhec.org/confluence/display/VO/Contact+List',
    text: 'Contact List (External)',
  },
  contactListInternal: {
    url: 'https://5280.pagerduty.com/users-new',
    text: 'Contact List (Internal)',
  },
  scheduleOriginationsPrimary: {
    url: 'https://5280.pagerduty.com/schedules#PW583L8',
    text: 'VO Primary On-Call',
  },
  scheduleOriginationsSecondary: {
    url: 'https://5280.pagerduty.com/schedules#P11C0SS',
    text: 'VO Secondary On-Call',
  },
  schedulePlatformPrimary: {
    url: 'https://5280.pagerduty.com/schedules#PS9T5YN',
    text: 'VP Primary On-Call',
  },
  schedulePlatformSecondary: {
    url: 'https://5280.pagerduty.com/schedules#PYGX0KL',
    text: 'VP Secondary On-Call',
  },
  scheduleManagers: {
    url: 'https://5280.pagerduty.com/schedules#PN0TXK0',
    text: 'VO Management On-Call',
  },
};

export const supportUrls = {
  mockups: {
    url: 'https://app.axure.cloud/app/fs/manage/',
    text: 'Axure Mockups',
  },
  dataDog: {
    url: 'https://app.datadoghq.com/account/login/id/xqw4fjew05ivgn3b',
    text: 'DataDog',
  },
  jfrog: {
    url: 'https://nelnet.jfrog.io/ui/login/',
    text: 'JFrog',
  },
  jiraImppact: {
    url: 'https://jira.cl.glhec.org/secure/RapidBoard.jspa?rapidView=428',
    text: 'Jira - Imppact',
  },
  jiraTnb: {
    url: 'https://jira.cl.glhec.org/secure/RapidBoard.jspa?rapidView=425',
    text: 'Jira - TNB',
  },
  jiraD2tc: {
    url: 'https://jira.cl.glhec.org/secure/RapidBoard.jspa?rapidView=369',
    text: 'Jira - D2TC',
  },
  originationsHandbook: {
    url: 'https://portal.docs.develop.velocity.nelnet.io/nni-velocity-docs-handbook/',
    text: 'VO Handbook',
  },
  platformDocs: {
    url: 'https://internal.docs.velocity.nelnet.io/',
    text: 'Platform Docs',
  },
  apiDocs: {
    url: 'https://docs.develop.velocity.nelnet.io/',
    text: 'API Docs',
  },
  xpmDocs: {
    url: 'https://xpm.docs.develop.velocity.nelnet.io/',
    text: 'XPM Docs',
  },
  unifiDocs: {
    url: 'https://unifi.nelnet.io/react/components/',
    text: 'Unifi React',
  },
};

export const nelnetUrls = {
  workday: {
    url: 'https://www.myworkday.com/nelnet/d/home.htmld',
    text: 'Workday',
  },
  nelnetSharepoint: {
    url: 'https://nelnet.sharepoint.com',
    text: 'Nelnet Sharepoint',
  },
  servicePortal: {
    url: 'https://nelnet.servicenowservices.com/',
    text: 'Service Portal',
  },
  learningPortal: {
    url: 'https://thelearningportal.myabsorb.com/#/dashboard',
    text: 'Learning Portal',
  },
  wellAware: {
    url: 'https://wellaware.uswellness.com/dt/v2/uw2index.asp',
    text: 'WellAware',
  },
  marathonHealth: {
    url: 'https://my.marathon-health.com/#!/Home/Login',
    text: 'Marathon Health',
  },
  pluralsight: {
    url: 'https://app.pluralsight.com/sso/nelnet',
    text: 'Pluralsight',
  },
};
