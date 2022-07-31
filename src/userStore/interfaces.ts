export interface UserInfor {
    id: String;
    //photo: String;
    firstName: String;
    lastName: String;
    mail: String;
    position: number;        //0-Seller,1-Direcor,2-Developer,3-Co-founder
    department: number;      //0-Human resources,1-Branding products,2-Accounting,3-Moblie App,4-IT department
    country: String;
    status: number;          //0-Pending,1Active
    porifolio: number;       //0-100
    role: number;            //0-Owner, 1-Employee
    _index: number;
}

export interface UserState {
    pageIndex: number;
    pageSize: number;
    userCount: number;
    users: UserInfor[];
    showUserDialog:boolean;
    editUserId:string;
}