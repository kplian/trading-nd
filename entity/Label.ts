/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary Account Status Entity
 * @author Rensi Arteaga Copari
 *
 * Created at     : 2021-23-04 18:55:38
 * Last modified  :
 */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm';

import { PxpEntity } from '../../../lib/pxp';
import Item from './Item';

@Entity({ name: 'ttr_label' })

export default class Label extends PxpEntity {
  @PrimaryGeneratedColumn({ name: 'label_id' })
  labelId: number;

  @Column({ name: 'code', type: 'varchar', length: 50, nullable: true })
  code: string;

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: true })
  name: string;

  @ManyToMany(() => Item)
  @JoinTable({
    name: 'ttr_item_label',
    joinColumn: {
      name: 'label_id',
      referencedColumnName: 'labelId'
    },
    inverseJoinColumn: {
      name: 'item_id',
      referencedColumnName: 'itemId'
    }
  })
  labels: Label[];

}
