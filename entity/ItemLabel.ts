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
 * Created at     : 2021-07-10 18:55:38
 * Last modified  :
 */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable, ManyToOne, JoinColumn
} from 'typeorm';

import { PxpEntity } from '@pxp-nd/entities';
import Item from './Item';
import Label from './Label';

@Entity({ name: 'ttr_item_label' })

export default class ItemLabel extends PxpEntity {
  @PrimaryGeneratedColumn({ name: 'item_label_id' })
  itemLabelId: number;

  @Column({ name: 'item_id', type: 'numeric', nullable: true })
  itemId: string;

  @Column({ name: 'label_id', type: 'numeric', nullable: true })
  labelId: string;

  @ManyToOne(() => Item, item => item.itemLabel)
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @ManyToOne(() => Label, label => label.itemLabel)
  @JoinColumn({ name: 'label_id' })
  label: Label;

}
