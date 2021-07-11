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
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { PxpEntity } from '@pxp-nd/entities';
import ItemType from './ItemType';


@Entity({ name: 'ttr_item_type_config' })

export default class ItemTypeConfig extends PxpEntity {
  @PrimaryGeneratedColumn({name:'item_type_config_id'})
  productTypeConfingId: number;

  @Column({ name: 'name', type: 'varchar', length: 50, nullable: true })
  name: string;

  @Column({ name: 'data_type', type: 'varchar', length: 50, nullable: true })
  itemTypeConfig: string;

  @Column({ name: 'item_type_id', type: 'numeric', nullable: true })
  itemTypeId: string;

  @Column({ name: 'default_table', type: 'varchar', length: 100, nullable: true })
  defaultTable: string;

  @ManyToOne(() => ItemType, itemType => itemType.configs)
  @JoinColumn({ name: 'item_type_id' })
  itemType: ItemType;
}
