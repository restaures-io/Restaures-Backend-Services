import { createDocument } from "zod-openapi";
import { refreshTokenSchema } from "../validations/common/refresh.token.schema.js";
import {
  loginCustomerSchema,
  registerCustomerSchema,
} from "../validations/customer/auth.customer.schemas.js";
import {
  loginRestaurantSchema,
  registerRestaurantSchema,
} from "../validations/restaurant/auth.restaurant.schemas.js";

const openApiSpec = createDocument({
  openapi: "3.0.0",
  info: {
    title: "Restaures-Services",
    version: "1.0.0",
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  // for customer auth
  paths: {
    "/api/customer/login": {
      post: {
        tags: ["Customer Auth"],
        summary: "Login Customer",
        requestBody: {
          content: {
            "application/json": {
              schema: loginCustomerSchema,
            },
          },
        },
        responses: {
          200: {
            description: "Success",
          },
          400: {
            description: "Bad Request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/customer/register": {
      post: {
        tags: ["Customer Auth"],
        summary: "Register Customer",
        requestBody: {
          content: {
            "application/json": {
              schema: registerCustomerSchema,
            },
          },
        },
        responses: {
          200: {
            description: "Success",
          },
          400: {
            description: "Bad Request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/upload-file": {
      post: {
        tags: ["Utility"],
        summary: "allocate restaurant",
        security: [
          {
            BearerAuth: [],
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  file: {
                    type: "string",
                    format: "binary",
                  },
                  files: {
                    type: "array",
                    items: {
                      type: "string",
                      format: "binary",
                    },
                  },
                  filePath: {
                    type: "string",
                    default: "assets",
                  },
                  metadata: {
                    type: "string",
                    default: null,
                  },
                  fileName: {
                    type: "string",
                    default: null,
                  },
                  contentType: {
                    type: "string",
                    default: "image/jpeg",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Success",
          },
          400: {
            description: "Bad Request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/refresh": {
      post: {
        tags: ["Utility"],
        summary: "Login",
        requestBody: {
          content: {
            "application/json": {
              schema: refreshTokenSchema,
            },
          },
        },
        responses: {
          200: {
            description: "Success",
          },
          400: {
            description: "Bad Request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/restaurant/register": {
      post: {
        tags: ["Restaurant Auth"],
        summary: "Register Restaurant",
        requestBody: {
          content: {
            "application/json": {
              schema: registerRestaurantSchema,
            },
          },
        },
        responses: {
          200: {
            description: "Success",
          },
          400: {
            description: "Bad Request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/restaurant/login": {
      post: {
        tags: ["Restaurant Auth"],
        summary: "Login Restaurant",
        requestBody: {
          content: {
            "application/json": {
              schema: loginRestaurantSchema,
            },
          },
        },
        responses: {
          200: {
            description: "Success",
          },
          400: {
            description: "Bad Request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
  },
});

export default openApiSpec;
