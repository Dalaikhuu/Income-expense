import jwt from "jsonwebtoken";
import { compareHash } from "../utils/passwordHash.js";
import fs from "fs";
import { client } from "../index.js";

const getUserQuery = async (email) => {
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);
  console.log(user.rows);
  return user.rows;
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.send("Please provide email and password");
    }
    if (email === "" || password === "") {
      res.send("Please provide email and password");
    }
    const users = await getUserQuery(email);
    const user = users.find((user) => user.email === email);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    const checkPassword = compareHash(password, user.password);
    if (checkPassword) {
      const token = jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET || "secret",
        {
          expiresIn: "1d",
        }
      );

      req.headers.authorization = token;
      req.Token = token;
      next();
    } else {
      res.send("Invalid email or password");
    }
  } catch (error) {
    res.send(error.message);
  }
};
