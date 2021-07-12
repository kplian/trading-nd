import {
	OneToMany,
	JoinColumn,
	ManyToOne,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';

@Entity({ name: 'ttr_customer_pay_method' })
export default class CustomerPayMethod extends BaseEntity {

	@PrimaryGeneratedColumn({ name: 'customer_pay_method' })
	customerPayMethod: number;

	@Column({ name: 'customer_id', type: 'integer' })
	customerId: number;

	@Column({ type: 'varchar', length: 50 })
	name: string;

	@Column({ type: 'varchar', length: 300 })
	token: string;

	@Column({ name: 'credit_card_cumber', type: 'varchar', length: 100 })
	creditCardCumber: string;

	@Column({ name: 'expiration_date', type: 'date' })
	expirationDate: Date;
}
