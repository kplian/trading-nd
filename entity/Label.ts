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
} from 'typeorm';

import { PxpEntity } from '../../../lib/pxp';


@Entity({ name: 'ttr_label' })

export default class Label  extends PxpEntity {
    @PrimaryGeneratedColumn({name:'label_id'})
    labelId: number;

    @Column({ name: 'code', type: 'varchar', length: 50, nullable: true })
    code: string;

    @Column({ name: 'name', type: 'varchar', length: 100, nullable: true })
    name: string;

}
