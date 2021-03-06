import {
	OneToMany,
	JoinTable,
	ManyToOne,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';
import ShoppingCart from './ShoppingCart';
@Entity({ name: 'ttr_customer' })
export default class Customer extends BaseEntity {

	@PrimaryGeneratedColumn({ name: 'customer_id' })
	customerId: number;

	@Column({ type: 'varchar', length: 30 })
	code: string;

	@Column({ type: 'varchar', length: 100 })
	name: string;

	@Column({ name: 'customer_type_id', type: 'integer' })
	customerTypeId: number;

	@Column({ type: 'varchar', length: 100 })
	email: string;
	
	@OneToMany(() => ShoppingCart, shoppingCart => shoppingCart.customer)
  	@JoinTable()
  	shoppingCart: ShoppingCart[];
}
