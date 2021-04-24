/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Vendor Controller
 *
 * @summary Vendor Entity
 * @author Rodrigo Chumacero
 *
 * Created at     : 2021-24-04
 * Last modified  :
 */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

import { PxpEntity } from '../../../lib/pxp';


@Entity({ name: 'ttr_vendor' })

export default class Vendor extends PxpEntity {
    @PrimaryGeneratedColumn({name:'vendor_id'})
    vendorId: number;

    @Column({ name: 'code', type: 'varchar', length: 50, nullable: true })
    code: string;

    @Column({ name: 'name', type: 'varchar', length: 100, nullable: true })
    name: string;

    @Column({ name: 'master_vendor_id', type: 'int', nullable: true })
    masterVendorId: string;

}
