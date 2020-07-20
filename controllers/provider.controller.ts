import {} from "typeorm";
import { Provider } from "../src/entity/Provider";
import { Request, Response } from "express";
import { validate, Type, Any, Email } from "validate-typescript";
import providerValidation from "../sarUtilities/validation";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default class providerController {
  static async getProviders(req: Request, res: Response) {
    const allProviders = Provider.find();
    return res.send(allProviders);
  }

  static async getSingleProvider(req: Request, res: Response) {
    const oneProvider = await Provider.findOne(req.params.id);
    return res.send(oneProvider);
  }

  static async newProvider(req: Request, res: Response) {
    const existProvider = await Provider.findOne({ email: req.body.email });
    const checkProvider = validate(
      req.body,
      providerValidation.RegisterValidation()
    );
    if (existProvider) {
      return res.send("Provider already exist");
    } else if (checkProvider) {
      return res.status(400).send("something wrong!");
    } else {
      let password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newProvider = new Provider();
      newProvider.name = req.body.name;
      newProvider.phone = req.body.phone;
      newProvider.address = req.body.address;
      newProvider.lang = req.body.lang;
      newProvider.lat = req.body.lat;
      newProvider.email = req.body.email;
      newProvider.password = hashedPassword;
      newProvider.save();
      res.send("Done!");
    }
  }
  // static async loginProvider(req: Request, res: Response) {
  //   const checkLogin = validate(req.body, providerValidation.LoginValidation);
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
  //   const findUpdatedProvider = await Provider.findOne(req.params.id);
  //   const checkUpdate = validate(req.body, providerValidation.UpdateProvider);
  //   if (!findUpdatedProvider) {
  //     res.send("There is no provider under this ID");
  //   } else if (checkUpdate) {
  //     return res.send(checkUpdate);
  //   } else {
  //     Provider.update(Provider, req.body);
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
