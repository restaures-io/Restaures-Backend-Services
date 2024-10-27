import jwt from "jsonwebtoken";
import { doubleEncryptData, doubleDecryptData } from "./doubleEncryption.js";
class JwtService {
  // set expiry to 1d by default
  static sign(payload, expiry = "365d", secret = process.env.ACCESS_TOKEN_KEY) {
    const token = doubleEncryptData(
      jwt.sign(payload, secret, { expiresIn: expiry })
    );
    return token;
  }

  static verify(token, secret = process.env.ACCESS_TOKEN_KEY) {
    return jwt.verify(doubleDecryptData(token), secret);
  }
}

export default JwtService;
