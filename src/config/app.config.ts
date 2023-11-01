interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Finance Manager'],
  tenantName: 'Company',
  applicationName: 'Vehicle Financing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'View available vehicles',
    'Apply for vehicle finance',
    'View personal finance information',
  ],
  ownerAbilities: [
    'Manage user',
    'Manage company',
    'Manage vehicle',
    'Manage finance',
    'Manage customer',
    'Manage business owner',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6a74d9cd-df1c-4e24-8b82-8d0126bfdf0c',
};
