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
 * Last modified  : 2021-07-12 00:14:36
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Item from './Item';
import ShoppingCart from './ShoppingCart';
import { PxpEntity } from '@pxp-nd/entities';

@Entity({ name: 'ttr_cart_detail' })
export default class CartDetail extends PxpEntity {

  @PrimaryGeneratedColumn({ name: 'cart_detail_id' })
  cartDetailId: number;

  @Column({ name: 'quantity', type: 'numeric', nullable: false })
  quantity: number

  @Column({ name: 'price', type: 'numeric', nullable: false })
  price: number
  //price after discount
  @Column({ name: 'finalPrice', type: 'numeric', nullable: false })
  finalPrice: number
  //[none, customer, item, package]
  @Column({ name: 'discount_type', type: 'varchar', nullable: false, length: 50, default: 'none'})
  discountType: string

  @Column({ name: 'notes', type: 'varchar', nullable: true, length: 150 })
  notes: string

  @ManyToOne(() => Item, item => item.cartDetails)
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @ManyToOne(() => ShoppingCart, shoppingCart => shoppingCart.cartDetails)
  @JoinColumn({ name: 'shopping_cart_id' })
  shoppingCart: ShoppingCart;

}