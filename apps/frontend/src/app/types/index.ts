export type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  id: {
    name: number;
  };
};

export type EmployListProps = {
  users: User[];
};

export type State<T> =
  | {
      //pending
      isLoading: true;
      isError: false;
      data: undefined;
    }
  | {
      //fullfilled
      isLoading: false;
      isError: false;
      data:T;
    }
  | {
      //error
      isLoading: false;
      isError: true;
      data: undefined;
    };

export type APIResponse<T> ={
    results: T
}


