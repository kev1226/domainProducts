import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Product {

    @Column({primary:true, generated:true})
    id:number;

    @Column()
    name: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    price: number;

    @Column()
    category_id: number;

    @DeleteDateColumn()
    deletedt: Date;
}
