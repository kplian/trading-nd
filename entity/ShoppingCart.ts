/**
 * Kplian Ltda 2020
 *
 * MIT
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author JRR
 *
 * Created at     : 2020-09-17 18:55:38
 * Last modified  : 2021-07-11 23:54:28
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, JoinTable } from 'typeorm';
import Customer from './Customer';
import CartDetail from './CartDetail';
import { PxpEntity } from '@pxp-nd/entities';

@Entity({ name: 'ttr_shopping_cart' })
export default class ShoppingCart extends PxpEntity {

  @PrimaryGeneratedColumn({ name: 'shopping_cart_id' })
  shoppingCartId: number;

  @Column({ name: 'start_date', type: 'timestamp', nullable: false })
  startDate: string

  @Column({ name: 'end_date', type: 'timestamp', nullable: true })
  endDate: string
  // [draw, pending, paid]
  @Column({ name: 'status', type: 'varchar', nullable: false, length: 25 })
  status: string
  // [proforma, sale]
  @Column({ name: 'type', type: 'varchar', nullable: false, length: 25 })
  type: string

  @ManyToOne(() => Customer, customer => customer.shoppingCart)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => CartDetail, cartDetail => cartDetail.shoppingCart)
  @JoinTable()
  cartDetails: CartDetail[];  

}