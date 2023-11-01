import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FinanceInterface {
  id?: string;
  interest_rate: number;
  loan_term: number;
  down_payment: number;
  monthly_payment: number;
  total_payment: number;
  vehicle_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  user?: UserInterface;
  _count?: {};
}

export interface FinanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
  user_id?: string;
}
