import { BusinessOwnerInterface } from 'interfaces/business-owner';
import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  business_owner?: BusinessOwnerInterface[];
  vehicle?: VehicleInterface[];

  _count?: {
    business_owner?: number;
    vehicle?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  name?: string;
  tenant_id?: string;
}
