export type User = {
  id: string;
  name: string;
  email: string;
  position: string;
  positionTitle: string;
  country: string;
  status: 'Active' | 'Pending';
  portfolio: number;
  role: 'Employee' | 'Owner';
};

export type ServiceResponse<T> = {
  data: {
    data: T;
    total: number;
  };
  success: boolean;
};
