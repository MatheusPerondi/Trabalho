import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { string, z } from 'zod';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe';
import { isValidCPF } from "../app.controller";
import { CreateProductService } from "./create-product.service";

 const categoryEnum = z.enum(["ELECTRONICS", "FOODS", "MATERIALS"]);


    const createProductBodySchema = z.object({
      name: z.string().min(3),
      description: z.string().min(3),
      price: z.number(), 
      inStock: z.number(),
      isAvailable: z.boolean(),
      category: categoryEnum,
      tags: z.array(z.string()),
      cpf: z.string().regex(/^\d{11}$/ , {message:'Cpf deve conter exatamente 11 digitos Numericos'})
      .refine(isValidCPF,{message:"CPF Invalid"})
    
    });

    const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);
    type createProductBodySchema = z.infer<typeof createProductBodySchema>;


    @Controller('/products')
    export class CreateProductController {
        constructor(private createProduct: CreateProductService){}


        @Post()
        @HttpCode(201)
        async handle(@Body(bodyValidationPipe) body: createProductBodySchema){
          const{
            name,
            description,
            price,
            inStock,
            isAvailable,
            category,
            tags, 
          } = body;
          
          
          
          const product = await this.createProduct.execute({
            name,
            description,
            price,
            inStock,
            isAvailable,
            category,
            tags,
          });

          return {
            product
          }
    
        }



    }   



       
    
