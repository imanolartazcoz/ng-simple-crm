import { CommentStmt } from '@angular/compiler';

export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;
    customersSince: any;
}

export interface IOrder {
    customerrId: number;
    orderItemns: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}