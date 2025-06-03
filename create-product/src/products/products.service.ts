import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly httpService: HttpService, // << importante
) {}

  async create(createProductDto: CreateProductDto) {
    const { category_id } = createProductDto;

    // Verificar si la categoría existe
    try {
      await firstValueFrom(
        this.httpService.get(`http://localhost:3006/api/v1/category-products/${category_id}`)
      );
    } catch (error) {
      throw new NotFoundException(`La categoría con ID ${category_id} no existe`);
    }

    return await this.productRepository.save(createProductDto);
  }
  
}