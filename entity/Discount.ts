/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary 
 * Discount Entity
 * @author Israel CM
 *
 * Created at     : 2021-23-04 18:55:38
 * Last modified  :
 */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

import { PxpEntity } from '../../../lib/pxp';


@Entity({ name: 'discount' })

export default class Discount  extends PxpEntity {
    @PrimaryGeneratedColumn({name:'discount_id'})
    discountId: number;

    @Column({ name: 'item_id', type: 'numeric', nullable: true })
    itemId: number;

    @Column({ name: 'start_date', type: 'date', nullable: true })
    startDate: Date;

    @Column({ name: 'end_date', type: 'date', nullable: true })
    endDate: Date;

    @Column({ name: 'percentage', type: 'numeric', nullable: true })
    percentage: number;

}
