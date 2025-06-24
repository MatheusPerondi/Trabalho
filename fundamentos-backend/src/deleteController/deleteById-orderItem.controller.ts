import { Controller, Delete, Param, HttpCode, HttpStatus } from "@nestjs/common";
import { DeleteOrderItemService } from "./deleteById-orderItem.service";


@Controller("order-items")
export class OrderItemsController {
  constructor(private deleteOrderItemService: DeleteOrderItemService) {}

  @Delete(":orderID/:productID")
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(
    @Param("orderID") orderID: string,
    @Param("productID") productID: string
  ): Promise<void> {
    await this.deleteOrderItemService.execute(orderID, productID);
  }
}
