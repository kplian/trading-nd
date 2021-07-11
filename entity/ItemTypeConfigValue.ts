/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary Item Type Config Value Entity
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
import ItemTypeConfig from './ItemTypeConfig';


@Entity({ name: 'ttr_item_type_config_value' })

export default class ItemTypeConfigValue extends PxpEntity {
  @PrimaryGeneratedColumn({name:'item_type_config_value_id'})
  itemTypeConfigValueId: number;

  @Column({ name: 'item_type_config_id', type: 'numeric', nullable: true })
  itemTypeConfigId: string;

  @Column({ name: 'item_id', type: 'numeric', nullable: true })
  itemId: string;

  @Column({ name: 'value', type: 'varchar', length: 200, nullable: true })
  value: string;

  @ManyToOne(() => ItemTypeConfig, itemTypeConfig => itemTypeConfig.itemTypeConfigValue)
  @JoinColumn({ name: 'item_type_config_id' })
  itemTypeConfig: ItemTypeConfig;
}
