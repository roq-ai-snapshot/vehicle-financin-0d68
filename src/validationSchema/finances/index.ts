import * as yup from 'yup';

export const financeValidationSchema = yup.object().shape({
  interest_rate: yup.number().integer().required(),
  loan_term: yup.number().integer().required(),
  down_payment: yup.number().integer().required(),
  monthly_payment: yup.number().integer().required(),
  total_payment: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
