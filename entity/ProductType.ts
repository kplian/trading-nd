/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary Account Status Entity
 * @author Favio Figueroa
 *
 * Created at     : 2021-03-10 18:55:38
 * Last modified  :
 */
 import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  import { PxpEntity } from '../../../lib/pxp';
  
  
  @Entity({ name: 'ttr_product_type' })
  
  export default class ProductType extends PxpEntity {
  
    @PrimaryGeneratedColumn({name:'product_type_id'})
    productTypeId: number;
  
    @Column({ name: 'code', type: 'varchar', length: 50, nullable: true })
    code: string;

    @Column({ name: 'name', type: 'varchar', length: 100, nullable: true })
    name: string;

    @Column({ name: 'description', type: 'varchar', length: 1000, nullable: true })
    description: string;
  
    @Column({ name: 'have_stock_yn', type: 'varchar', length: 1, nullable: true })
    haveStockYN: string;

    @Column({ name: 'groupable_yn', type: 'varchar', length: 1, nullable: true })
    groupableYN: string;
  
  }
  