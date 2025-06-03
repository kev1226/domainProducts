import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'IGBDo4848',
      database: 'products_db',
      autoLoadEntities: true,
      synchronize: true,
    }),  
    ProductsModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
