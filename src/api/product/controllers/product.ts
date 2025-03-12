/**
 * product controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::product.product');
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params; // Lấy id từ request URL

      const product = await strapi.entityService.findOne(
        "api::product.product",
        id,
        {
          populate: "*",
        }
      );

      if (!product) {
        return ctx.notFound("Sản phẩm không tồn tại!");
      }

      return product;
    },
  })
);
