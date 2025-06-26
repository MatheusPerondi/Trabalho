import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateProductController } from './products/create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './products/create-product.service';
import { ProductsRepository } from './products.repository';
import { ModelRepository } from './model.repository';
import { FindManyByNameProdutcController } from './products/fetch-recent-products.controller';
import { FindManyByName } from './products/fetch-recent-products.service';
import { FindAllModelsController } from './models/find-all-model.controller';
import { FindAllModelsService } from './models/find-all-model.service';
import { UpdateModelController } from './models/put-model.controller';
import { UpdateModelService } from './models/put-model.service';
import { DeleteModelController } from './models/deleteById-model.controller';
import { DeleteModelService } from './models/deleteById-model.service';
import { FindAllProductsController } from './products/find-all-product.controller';
import { FindAllProductsService } from './products/find-all-product.service';
import { UpdateProductController } from './products/put-product.controller';
import { UpdateProductService } from './products/put-product.service';
import { DeleteProductController } from './products/deleteById-product.controller';
import { DeleteProductService } from './products/deleteById-product.service';
import { CreateModelController } from './models/create-model.controller';
import { CreateModelService } from './models/create-model.service';
import { CreateUserService } from './users/create-user.service';
import { CreateUserController } from './users/create-user.controller';
import { DeleteByIdUserController } from './users/deleteById-user.controller';
import { DeleteByIdUserService } from './users/deleteById-user.service';
import { FindAllUserController } from './users/find-all-user.controller';
import { FindAllUsersService } from './users/find-all-user.service';
import { UpdateUserService } from './users/put-user.service';
import { UpdateUserController } from './users/put-user.controller';
import { CreateProfileService } from './profiles/create-profile.service';
import { CreateProfileController } from './profiles/create-profile.controller';
import { DeleteByIdProfileService } from './profiles/deleteById-profile.service';
import { DeleteByIdProfileController } from './profiles/deleteById-profile.controller';
import { FindAllProfileService } from './profiles/find-all-profile.service';
import { FindAllProfileController } from './profiles/find-all-profile.controller';
import { PutProfileService } from './profiles/put-profile.service';
import { UpdateProfileController } from './profiles/put-profile.controller';
import { CreateOrderController } from './orders/create-order.controller';
import { CreateOrderService } from './orders/create-order.service';
import { OrderController } from './orders/deleteById-order.controller';
import { DeleteOrderService } from './orders/deleteById-order.service';
import { FindAllOrdersService } from './orders/find-all-order.service';
import { UpdateOrderService } from './orders/put-order.service';
import { CreateOrderItemsController } from './orderItens/create-orderItem.controller';
import { CreateOrderItemsService } from './orderItens/create-orderItem.service';
import { OrderItemsController } from './orderItens/deleteById-orderItem.controller';
import { DeleteOrderItemService } from './orderItens/deleteById-orderItem.service';
import { FindAllOrderItemsService } from './orderItens/find-all-orderItem.service';
import { UpdateOrderItemService } from './orderItens/put-orderItem.service';
import { UserRepository } from './user.repository';
import { OrderRepository } from './orderRepository';
import { OrderItemsRepository } from './orderItem.repository';
import { ProfileRepository } from './profile.repository';




@Module({
  imports: [],
  controllers: [CreateProductController, CreateModelController, FindManyByNameProdutcController, FindAllModelsController, UpdateModelController, DeleteModelController, FindAllProductsController, FindManyByNameProdutcController, UpdateProductController, DeleteProductController, CreateUserController, DeleteByIdUserController, FindAllUserController, UpdateUserController, CreateProfileController, DeleteByIdProfileController, FindAllProfileController, UpdateProfileController, CreateOrderController, OrderController, OrderController, CreateOrderItemsController, OrderItemsController, OrderItemsController],
  providers: [PrismaService, CreateProductService, ProfileRepository, OrderItemsRepository, OrderRepository, ProductsRepository, CreateModelService, ModelRepository, FindManyByName, FindAllModelsService, UpdateModelService, DeleteModelService, FindAllProductsService, FindManyByNameProdutcController, UpdateProductService, UserRepository, OrderRepository , DeleteProductService, CreateUserService, DeleteByIdUserService, FindAllUsersService, UpdateUserService, CreateProfileService, DeleteByIdProfileService, FindAllProfileService, PutProfileService, CreateOrderService, DeleteOrderService, FindAllOrdersService, UpdateOrderService, CreateOrderItemsService, DeleteOrderItemService, FindAllOrderItemsService, UpdateOrderItemService],
})
export class AppModule {}
