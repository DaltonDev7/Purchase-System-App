import { BaseEntity } from "./base-entity";

export interface Article extends BaseEntity {
    description:string
    brandId:number;
    measurementUnitId:number;
    stock:number;
}