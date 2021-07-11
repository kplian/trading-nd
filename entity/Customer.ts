import {
	OneToMany,
	JoinColumn,
	ManyToOne,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';

@Entity({ name: 'ttr_customer' })
export default class Customer extends BaseEntity {

	@PrimaryGeneratedColumn({ name: 'customer_id' })
	customerId: number;

	@Column({ type: 'character varying', length: 30 })
	code: string;

	@Column({ type: 'character varying', length: 100 })
	name: string;

	@Column({ name: 'customer_type_id', type: 'integer' })
	customerTypeId: number;

	@Column({ type: 'character varying', length: 100 })
	email: string;
}
