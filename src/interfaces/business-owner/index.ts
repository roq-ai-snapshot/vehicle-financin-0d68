import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessOwnerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BusinessOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  company_id?: string;
  user_id?: string;
}
