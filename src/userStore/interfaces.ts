export interface UserInfor {
    id: String;
    //photo: String;
    firstName: String;
    lastName: String;
    mail: String;
    position: Number;        //0-Seller,1-Direcor,2-Developer,3-Co-founder
    department: Number;      //0-Human resources,1-Branding products,2-Accounting,3-Moblie App,4-IT department
    country: String;
    status: Number;          //0-Pending,1Active
    porifolio: Number;       //0-100
    role: Number;            //0-Owner, 1-Employee
    _index: Number;
}

export interface UserState {
    users: UserInfor[];
}