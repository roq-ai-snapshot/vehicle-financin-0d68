import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().required(),
  price: yup.number().integer().required(),
  mileage: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
