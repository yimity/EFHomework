export type User = {
  id: string;
  name: string;
  gender: 0 | 1;
  birthday: string;
  age: number;
  email: string;
  phone?: string;
};

export type ServiceResponse<T> = {
  data: {
    data: T;
    total: number;
  };
  success: boolean;
};
