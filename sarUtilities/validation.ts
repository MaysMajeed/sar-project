// import { Type, Any, Email } from "validate-typescript";

// export default class providerValidation {
//   static RegisterValidation = () => ({
//     name: Type(String),
//     phone: Type(Number),
//     address: Type(String),
//     lang: Type(Number),
//     lat: Type(Number),
//     email: Email(),
//     password: Type(String),
//   });

//   static LoginValidation = () => ({
//     email: Type(Email),
//     password: Type(String),
//   });

//   static UpdateProvider = () => ({
//     name: Type(String),
//     phone: Type(Number),
//     address: Type(String),
//     lang: Type(Number),
//     lat: Type(Number),
//   });
// }
export default class providerValidation {
  static RegisterValidation = () => ({
    name: {
      presence: true,
      length: {
        minimum: 3,
        message: "must be at least 6 characters",
      },
      format: {
        pattern: "[a-z0-9]+",
        flags: "i",
        message: "can only contain a-z and 0-9",
      },
    },
  });
}
