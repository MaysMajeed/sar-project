export default class providerValidation {
  static RegisterValidation = () => ({
    name: {
      presence: true,
      length: {
        minimum: 3,
        message: "must be at least 3 characters",
      },
      format: {
        pattern: "[a-z0-9]+",
        flags: "i",
        message: "can only contain a-z and 0-9",
      },
    },
    phone: {
      presence: true,
    },
    address: {
      presence: true,
    },
    lang: {
      presence: true,
    },
    lat: {
      presence: true,
    },
    email: {
      presence: true,
      email: true,
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        message: "password must be at least 6 characters",
      },
    },
  });
  static LoginValidation = () => ({
    email: {
      presence: true,
      email: true,
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        message: "password must be at least 6 characters",
      },
    },
  });
  static UpdateProvider = () => ({
    name: {
      presence: true,
      length: {
        minimum: 3,
        message: "must be at least 3 characters",
      },
      format: {
        pattern: "[a-z0-9]+",
        flags: "i",
        message: "can only contain a-z and 0-9",
      },
    },
    phone: {
      presence: true,
    },
    address: {
      presence: true,
    },
    lang: {
      presence: true,
    },
    lat: {
      presence: true,
    },
  });
}

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
