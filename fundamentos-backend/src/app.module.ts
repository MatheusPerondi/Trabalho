import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateProductController } from './createController/create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './createController/create-product.service';
import { ProductsRepository } from './products.repository';
import { ModelRepository } from './model.repository';
import { FindManyByNameProdutcController } from './FindByNameController/fetch-recent-products.controller';
import { FindManyByName } from './FindByNameController/fetch-recent-products.service';
import { FindAllModelsController } from './findAllController/find-all-model.controller';
import { FindAllModelsService } from './findAllController/find-all-model.service';
import { UpdateModelController } from './putController/put-model.controller';
import { UpdateModelService } from './putController/put-model.service';
import { DeleteModelController } from './deleteController/deleteById-model.controller';
import { DeleteModelService } from './deleteController/deleteById-model.service';
import { FindAllProductsController } from './findAllController/find-all-product.controller';
import { FindAllProductsService } from './findAllController/find-all-product.service';
import { FindManyByNameController } from './FindByNameController/find-by-name-products.controller';
import { FindManyByNameProduct } from './FindByNameController/find-by-name-products.service';
import { UpdateProductController } from './putController/put-product.controller';
import { UpdateProductService } from './putController/put-product.service';
import { DeleteProductController } from './deleteController/deleteById-product.controller';
import { DeleteProductService } from './deleteController/deleteById-product.service';
import { CreateModelController } from './createController/create-model.controller';
import { CreateModelService } from './createController/create-model.service';
import { CreateUserService } from './createController/create-user.service';
import { CreateUserController } from './createController/create-user.controller';
import { DeleteByIdUserController } from './deleteController/deleteById-user.controller';
import { DeleteByIdUserService } from './deleteController/deleteById-user.service';
import { FindAllUserController } from './findAllController/find-all-user.controller';
import { FindAllUsersService } from './findAllController/find-all-user.service';
import { UpdateUserService } from './putController/put-user.service';
import { UpdateUserController } from './putController/put-user.controller';
import { CreateProfileService } from './createController/create-profile.service';
import { CreateProfileController } from './createController/create-profile.controller';
import { DeleteByIdProfileService } from './deleteController/deleteById-profile.service';
import { DeleteByIdProfileController } from './deleteController/deleteById-profile.controller';
import { FindAllProfileService } from './findAllController/find-all-profile.service';
import { FindAllProfileController } from './findAllController/find-all-profile.controller';
import { PutProfileService } from './putController/put-profile.service';
import { UpdateProfileController } from './putController/put-profile.controller';
import { CreateOrderController } from './createController/create-order.controller';
import { CreateOrderService } from './createController/create-order.service';
import { OrderController } from './deleteController/deleteById-order.controller';
import { DeleteOrderService } from './deleteController/deleteById-order.service';
import { FindAllOrdersService } from './findAllController/find-all-order.service';
import { UpdateOrderService } from './putController/put-order.service';
import { CreateOrderItemsController } from './createController/create-orderItem.controller';
import { CreateOrderItemsService } from './createController/create-orderItem.service';
import { OrderItemsController } from './deleteController/deleteById-orderItem.controller';
import { DeleteOrderItemService } from './deleteController/deleteById-orderItem.service';
import { FindAllOrderItemsService } from './findAllController/find-all-orderItem.service';
import { UpdateOrderItemService } from './putController/put-orderItem.service';
import { UserRepository } from './user.repository';
import { OrderRepository } from './orderRepository';
import { OrderItemsRepository } from './orderItem.repository';




@Module({
  imports: [],
  controllers: [CreateProductController, CreateModelController, FindManyByNameProdutcController, FindAllModelsController, UpdateModelController, DeleteModelController, FindAllProductsController, FindManyByNameController, UpdateProductController, DeleteProductController, CreateUserController, DeleteByIdUserController, FindAllUserController, UpdateUserController, CreateProfileController, DeleteByIdProfileController, FindAllProfileController, UpdateProfileController, CreateOrderController, OrderController, OrderController, CreateOrderItemsController, OrderItemsController, OrderItemsController],
  providers: [PrismaService, CreateProductService, OrderItemsRepository, OrderRepository, ProductsRepository, CreateModelService, ModelRepository, FindManyByName, FindAllModelsService, UpdateModelService, DeleteModelService, FindAllProductsService, FindManyByNameProduct, UpdateProductService, UserRepository, OrderRepository , DeleteProductService, CreateUserService, DeleteByIdUserService, FindAllUsersService, UpdateUserService, CreateProfileService, DeleteByIdProfileService, FindAllProfileService, PutProfileService, CreateOrderService, DeleteOrderService, FindAllOrdersService, UpdateOrderService, CreateOrderItemsService, DeleteOrderItemService, FindAllOrderItemsService, UpdateOrderItemService],
})
export class AppModule {}
