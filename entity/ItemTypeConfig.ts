/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * Person Controller
 *
 * @summary Account Status Entity
 * @author Bellido Hilarion
 *
 * Created at     : 2021-03-10 18:55:38
 * Last modified  :
 */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

import { PxpEntity } from '../../../lib/pxp';


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

}
