/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary Account Status Type Entity
 * @author Favio Figueroa
 *
 * Created at     : 2020-09-17 18:55:38
 * Last modified  :
 */

import { PxpEntity } from '@pxp-nd/entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import Discount from './Discount';
import Label from './Label';
@Entity({ name: 'ttr_item' })
export default class Item extends PxpEntity {

  @PrimaryGeneratedColumn({ name: 'item_id' })
  itemId: number;


  @Column({ name: 'type', type: 'varchar', length: 200, nullable: true })
  type: string;


  @Column({ name: 'price', type: 'numeric', nullable: true })
  price: string;

  @Column({ name: 'available_yn', type: 'varchar', length: 80, nullable: true })
  availableYN: string;

  @Column({ name: 'quantity', type: 'numeric', nullable: true })
  quantity: string;

  @Column({ name: 'unit', type: 'varchar', length: 15, nullable: true })
  unit: string;

  @OneToMany(() => Discount, discount => discount.item)
  discounts: Discount[];

  @ManyToMany(() => Label)
  @JoinTable({
    name: 'ttr_item_label',
    joinColumn: {
      name: 'item_id',
      referencedColumnName: 'itemId'
    },
    inverseJoinColumn: {
      name: 'label_id',
      referencedColumnName: 'labelId'
    }
  })
  labels: Label[];
}
