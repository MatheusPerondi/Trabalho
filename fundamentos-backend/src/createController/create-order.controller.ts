import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { isValidCPF } from "../app.controller";
import {
  CreateOrderService,
  CreateOrderServiceResponse,
} from "./create-order.service";


const orderItemSchema = z.object({
  productId: z.string().uuid({ message: "ID do produto inválido" }),
  quantity: z.number().min(1, { message: "Quantidade deve ser no mínimo 1" }),
  price: z.number().min(0, { message: "Preço não pode ser negativo" }),
});

const createOrderBodySchema = z.object({
  total: z.number().min(0),
  userID: z.string().uuid({ message: "ID do usuário inválido" }),
  cpf: z
    .string()
    .regex(/^\d{11}$/, {
      message: "CPF deve conter exatamente 11 dígitos numéricos",
    })
    .refine(isValidCPF, { message: "CPF inválido" }),
  orderItems: z
    .array(orderItemSchema)
    .min(1, { message: "Pedido deve conter ao menos 1 item" }),
});

const bodyValidationPipe = new ZodValidationPipe(createOrderBodySchema);
type CreateOrderBody = z.infer<typeof createOrderBodySchema>;

@Controller("/orders")
export class CreateOrderController {
  constructor(private createOrder: CreateOrderService) {}

  @Post()
  @HttpCode(201)
  async handle(
    @Body(bodyValidationPipe) body: CreateOrderBody
  ): Promise<{ order: CreateOrderServiceResponse }> {
    const { total, userID, orderItems } = body;

    const order = await this.createOrder.execute({
      total,
      userID,
      orderItems,
    });

    return { order };
  }
}
