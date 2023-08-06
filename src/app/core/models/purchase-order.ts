import { Article } from "./article";
import { BaseEntity } from "./base-entity";
import { Department } from "./deparment";
import { Supplier } from "./supplier";

export interface PurchaseOrder extends BaseEntity{
    orderNumber?:string;
    articleId:number
    supplierId:number
    quantity:number
    departmentId:number
    unitCost:number
    total:number
    article:Article
    department:Department
    supplier:Supplier
}