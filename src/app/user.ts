export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string="N/A";
    password?: string='N/A';
    role?:string='N/A';
    address?: string="N/A";
    mobileNumber?: string="N/A";
    deleted?: boolean;
    isSelected?: boolean;
}
