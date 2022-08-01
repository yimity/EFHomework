export interface UserManagementState {
    users: User[];
    currentUser: User | undefined;
    total: number;
    showEditUserModal: boolean;
}

export interface User {
    id: string,
    name: string,
    email: string,
    position: string,
    positionTitle: string,
    country: string,
    status: string;
    portfolio: number;
    role: string;
}