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
  JoinTable, OneToMany
} from 'typeorm';

import { PxpEntity } from '@pxp-nd/entities';
import Item from './Item';
import ItemLabel from './ItemLabel';

@Entity({ name: 'ttr_label' })

export default class Label extends PxpEntity {
  @PrimaryGeneratedColumn({ name: 'label_id' })
  labelId: number;

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: true })
  name: string;

  @Column({ name: 'code', type: 'varchar', length: 50, nullable: true })
  code: string;

  @Column({ name: 'icon', type: 'varchar', length: 50, nullable: true })
  icon: string;

  @Column({ name: 'color', type: 'varchar', length: 50, nullable: true })
  color: string;

  @OneToMany(() => ItemLabel, itemLabel => itemLabel.label)
  itemLabel: ItemLabel[];


}
