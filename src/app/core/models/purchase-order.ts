import { BaseEntity } from "./base-entity";

export interface PurchaseOrder extends BaseEntity{
    orderNumber?:string;
    articleId:number
    supplierId:number
    quantity:number
    departmentId:number
    unitCost:number
    total:number
}