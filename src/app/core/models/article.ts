import { BaseEntity } from "./base-entity";
import { Brand } from "./brand";
import { UnitMeasurement } from "./unit-measurement";

export interface Article extends BaseEntity {
    description:string
    brandId:number;
    measurementUnitId:number;
    stock:number;
    brand:Brand;
    measurementUnit:UnitMeasurement
}