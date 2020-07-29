import {} from "typeorm";
import { Provider } from "../src/entity/Provider";
import { Request, Response } from "express";
import { validate, Type, Any, Email, Validator } from "validate-typescript";
import * as validator from "validate.js";
import providerValidation from "../sarUtilities/validation";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default class providerController {
  static async getProviders(req: Request, res: Response) {
    const allProviders = Provider.find({});
    return res.send(allProviders);
  }

  static async getSingleProvider(req: Request, res: Response) {
    const oneProvider = await Provider.findOne(req.params.id);
    return res.send(oneProvider);
  }

  static async newProvider(req: Request, res: Response) {
    try {
      const checkProvider = validator(
        req.body,
        providerValidation.RegisterValidation()
      );
      if (checkProvider) return res.status(400).json(checkProvider);
      const existProvider = await Provider.findOne({ email: req.body.email });

      if (existProvider) {
        return res.send("Provider already exist");
      } else {
        let password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newProvider = Provider.create({
          name: req.body.name,
          phone: req.body.phone,
          address: req.body.address,
          lang: req.body.lang,
          lat: req.body.lat,
          email: req.body.email,
          password: hashedPassword,
        });

        await newProvider.save();
        res.send(newProvider);
      }
    } catch (err) {
      console.log(err);
    }
  }
  // static async loginProvider(req: Request, res: Response) {
  //   const checkLogin = validator(
  //     req.body,
  //     providerValidation.LoginValidation()
  //   );
  //   const findLoginProvider = await Provider.findOne({ email: req.body.email });
  //   const checkProviderPassword = bcrypt.compare(
  //     req.body.password,
  //     findLoginProvider.password
  //   );

  //   if (checkLogin) {
  //     return res.send(checkLogin);
  //   } else if (!findLoginProvider) {
  //     return res.send("Invalid username or password");
  //   } else if (!checkProviderPassword) {
  //     return res.send("Invalid username or password");
  //   } else {
  //     const providerToken = jwt.sign(
  //       { UserID: findLoginProvider.id },
  //       process.env.providerSecret
  //     );
  //     res.send("You are authorized to login successfully");
  //   }
  // }

  // static async updateProvider(req: Request, res: Response) {
  //   const checkUpdate = validator(
  //     req.body,
  //     providerValidation.UpdateProvider()
  //   );
  //   if (checkUpdate) {
  //     return res.send(checkUpdate);
  //   }
  //   let findUpdatedProvider = await Provider.findOne(req.params.id);
  //   if (!findUpdatedProvider)
  //     return res.status(400).send("There is no provider under this ID");
  //   else {
  //     (findUpdatedProvider.name = req.body.name),
  //       (findUpdatedProvider.phone = req.body.phone),
  //       (findUpdatedProvider.address = req.body.address),
  //       (findUpdatedProvider.lang = req.body.lang),
  //       (findUpdatedProvider.lat = req.body.lat);
  //     await findUpdatedProvider.save();
  //     return res.send("The provider was updated successfully");
  //   }
  // }

  // static async deleteProvider(req: Request, res: Response) {
  //   const findDeletedProvider = await Provider.findOne(req.params.id);
  //   if (findDeletedProvider) {
  //     await Provider.delete(req.params.id);
  //     return res.send("The provider was deleted successsfully");
  //   } else {
  //     res.send("There is no provider under this ID");
  //   }
  // }
}
