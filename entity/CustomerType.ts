import {
	OneToMany,
	JoinColumn,
	ManyToOne,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';

@Entity({ name: 'ttr_customer_type' })
export default class CustomerType extends BaseEntity {

	@PrimaryGeneratedColumn({ name: 'customer_type_id' })
	customerTypeId: number;

	@Column({ type: 'varchar', length: 50 })
	name: string;

	@Column({ name: 'discount_percentage', type: 'numeric' })
	discountPercentage: number;
}
