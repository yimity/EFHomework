export type User = {
  id: String,
  name: String,
  email: String,
  photo: String,
  department: String,
  position: String,
  country: String,
  status: String,
  portfolio: Number,
  role: String,
};

export type ServiceResponse<T> = {
  data: {
    data: T;
    total: number;
  };
  success: boolean;
};
