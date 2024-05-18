type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  website: string;
  company: TCompany;
}

export enum LoadingStatus {
  IDLE = "idle",
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export interface IInitialUsersState {
  users: IUser[];
  loadingStatusUser: LoadingStatus;
}
