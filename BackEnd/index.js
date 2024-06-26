import pg from "pg";
import express from "express";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
import dotenv from "dotenv";
const CONNECTION_STRING =
  "postgresql://daagikhuu:kIrNm2TlhJ1A@ep-silent-lake-a1swgrsi.ap-southeast-1.aws.neon.tech/incomeDB?sslmode=require";

export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});
const dbInit = async () => {
  await client.connect();
  await client.query("SET statement_timeout = 0");
  await createUserTable();
  await createRecordTable();
  await createCategoryTable();
  console.log("Connected to database");
};
dbInit();

client.on("error", async (error, cl) => {
  if (error) {
    await client.connect();
  }
});

const createUserTable = async () => {
  const userTableCreateQuery = `CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username TEXT NOT NULL,
          email TEXT NOT NULL,
          password TEXT NOT NULL,
          currency TEXT,
          balance TEXT,
          created_at TIMESTAMP NOT NULL DEFAULT NOW()
          );`;

  const result = await client.query(userTableCreateQuery);
};

const createRecordTable = async () => {
  const recordTableCreateQuery = `CREATE TABLE IF NOT EXISTS records (
      id SERIAL PRIMARY KEY,
      income BOOLEAN NOT NULL,
      amount INT NOT NULL,
      category TEXT NOT NULL,
      date DATE NOT NULL,
      time TIME NOT NULL,
      payee TEXT NOT NULL,
      note TEXT NOT NULL,
      userEmail TEXT NOT NULL
    )`;
  const recordResult = await client.query(recordTableCreateQuery);
};

const createCategoryTable = async () => {
  const categoryTableCreateQuery = `CREATE TABLE IF NOT EXISTS category (
      id SERIAL PRIMARY KEY,
      category TEXT NOT NULL,
      icon TEXT NOT NULL
      
    )`;

  const categoryResult = await client.query(categoryTableCreateQuery);
};

const app = express();
app.use(express.json());
dotenv.config();

app.get("", async (req, res) => {
  res.send("Working Fine");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

// Middlewares
// app.use(express.json());
app.use(cors());

// Routes to use
app.use(userRouter);
