/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary
 * Discount Entity
 * @author Favio Figueroa
 *
 * Created at     : 2021-07-10 18:55:38
 * Last modified  :
 */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Item from './Item';
import { PxpEntity } from '@pxp-nd/entities';

@Entity({ name: 'ttr_discount' })

export default class Discount  extends PxpEntity {
  @PrimaryGeneratedColumn({name:'discount_id'})
  discountId: number;

  @Column({ name: 'item_id', type: 'numeric', nullable: false })
  itemId: number;

  @Column({ name: 'start_date', type: 'date', nullable: false })
  startDate: Date;

  @Column({ name: 'end_date', type: 'date', nullable: false })
  endDate: Date;

  @Column({ name: 'percentage', type: 'numeric', nullable: false })
  percentage: number;

  @ManyToOne(() => Item, item => item.discounts)
  @JoinColumn({ name: 'item_id' })
  item: Item;

}
