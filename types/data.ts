export interface Organization {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  domainName: string;
  companyDomain: string | null;
  contractStartDate: string | null;
  contractEndDate: string | null;
  registrationNo: string;
  vatNo: string | null;
  taxId: string | null;
  termAndConditions: string | null;
  active: boolean | null;
  blocked: boolean | null;
  allowInvoicing: boolean;
  address: string | null;
  discountPercentage: number;
  email: string;
  mobileNo: string;
  gstnNo: string | null;
  country: string;
  countryCode: string;
  city: string;
  organizationType: string | null;
  currency: string | null;
  invoiceDueDate: number;
  logoUrl: string;
  paypalId: string;
  paypalEmail: string;
  accountNumber: string | null;
  accountHolderName: string | null;
  iban: string | null;
  ifsc: string | null;
  swift: string | null;
  offerWebhook: string;
  bookingStateWebhook: string;
  driverAssignmentWebhook: string;
  logoConcent: boolean;
  createdAt: string;
  updatedAt: string;
  orgCreditProfile: {
    id: string;
    creditLimit: number;
    walletBalance: number;
    invoiceRefund: number | null;
    createdAt: string;
    updatedAt: string;
    organizationId: string;
  };
}

export interface Account {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string | null;
  businessEmail: string | null;
  mobileNo: string | null;
  officePhone: string | null;
  termsAndCondition: string | null;
  drivingLicence: string | null;
  age: number | null;
  occupation: string | null;
  businessType: string | null;
  isEmailSnoozed: boolean;
  fbiid: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  organizationId: string;
  organization: Organization;
}

export interface User {
  id: string;
  email: string;
  userType: number;
  mobileNo: string | null;
  verified: boolean;
  source: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  vendorId: string | null;
  accountId: string;
  account: Account;
  vendor: null;
}

export interface LoginResponseData {
  token: string;
  user: User;
}

export interface LoginResponse {
  status: number;
  message: string;
  data: LoginResponseData;
  token?: string; // Optional if token is also at root level
}
