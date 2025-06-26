import { Controller, Delete, Param, HttpCode, HttpStatus, NotFoundException } from "@nestjs/common";
import { DeleteOrderService } from "./deleteById-order.service";

@Controller("orders")
export class OrderController {
  constructor(private deleteOrderService: DeleteOrderService) {}

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: string): Promise<void> {
    await this.deleteOrderService.execute(id);
  }
}
