
export interface DicItem {
    key: number;
    value: string;
}
export const Positions: DicItem[] = [
    { key: 0, value: 'Seller' },
    { key: 1, value: 'Direcor' },
    { key: 2, value: 'Developer' },
    { key: 3, value: 'Co-founder' }
];

export const Departments: DicItem[] = [
    { key: 0, value: 'Human resources' },
    { key: 1, value: 'Branding products' },
    { key: 2, value: 'Accounting' },
    { key: 3, value: 'Moblie App' },
    { key: 4, value: 'IT department' }
];

export const Status: DicItem[] = [
    { key: 0, value: 'Pending' },
    { key: 1, value: 'Active' }
];

export const Roles: DicItem[] = [
    { key: 0, value: 'Owner' },
    { key: 1, value: 'Employee' }
];

export function GetItemValue(items:DicItem[], key:number):string{
    const item = items.find(i=>i.key===key);
    return item?item.value:'None';
}

export function GetPosition(key:number):string{
    return GetItemValue(Positions,key);
}

export function GetDepartment(key:number):string{
    return GetItemValue(Departments,key);
}

export function GetStatus(key:number):string{
    return GetItemValue(Status,key);
}

export function GetRole(key:number):string{
    return GetItemValue(Roles,key);
}