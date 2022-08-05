type baseType = {
  id: string;
  email: string;
  phone?: string;
  position: string[];
  country: string;
  status: 0 | 1 | 2;
  portFolio: number;
  role: 0 | 1 | 2;
};

export type User = baseType & {
  name: string;
};

export type addUserFormType = baseType & {
  name: string[];
};

export type PageInfoType = {
  pageIndex: number;
  pageSize: number;
  searchText: string;
};

export type ServiceResponse<T> = {
  data: {
    data: T;
    total: number;
  };
  success: boolean;
};
