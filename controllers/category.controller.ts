import {} from "typeorm";
import { Category } from "../src/entity/Category";
import { Request, Response } from "express";
import providerValidation from "../sarUtilities/validation";

export default class categoryController {
  static async getCategory(req: Request, res: Response) {
    const allCategory = await Category.find();
    return res.send(allCategory);
  }
}
