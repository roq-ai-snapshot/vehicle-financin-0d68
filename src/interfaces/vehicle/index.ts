import { FinanceInterface } from 'interfaces/finance';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  finance?: FinanceInterface[];
  company?: CompanyInterface;
  _count?: {
    finance?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  company_id?: string;
}
