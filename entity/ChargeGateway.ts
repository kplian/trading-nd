/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary Account Status Entity
 * @author MZM
 *
 * Created at     : 2021-03-10 18:55:38
 * Last modified  :
 */
 import {
    Entity,
    PrimaryGeneratedColumn,
    Column,ManyToOne,JoinColumn
  } from 'typeorm';
  import Vendor from './Vendor';
  import { PxpEntity } from '../../../lib/pxp';
  
  
  @Entity({ name: 'ttr_charge_gateway' })
  
  export default class ChargeGateway extends PxpEntity {
  
    @PrimaryGeneratedColumn({name:'charge_gateway_id'})
    chargeGatewayId: number;
  
    @Column({ name: 'type', type: 'varchar', length: 15, nullable: false })
    type: string;

    @Column({ name: 'status', type: 'varchar', length: 15, nullable: false })
    status: string;

    @Column({ name: 'public_key', type: 'varchar', length: 150, nullable: true })
    publicKey: string;
  
    @Column({ name: 'private_key', type: 'varchar', length: 150, nullable: true })
    privateKey: string;

    @Column({ name: 'coonected_account', type: 'varchar', length: 150, nullable: true })
    connectedAccount: string;

    
    @Column({ nullable: true, name: 'vendor_id' })
    vendorId: number;

    @ManyToOne(() => Vendor, vendor => vendor.chargeGateways)
    @JoinColumn({ name: 'vendor_id' })
    vendor: Vendor;

  }
  