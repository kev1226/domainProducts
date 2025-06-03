import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {

  constructor(

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  
  ) { }

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
  }

}
