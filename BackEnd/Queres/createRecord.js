import { client } from "../../index.js";

const recordCreate = async (
  income,
  amount,
  category,
  date,
  time,
  payee,
  note,
  userEmail
) => {
  const createRecordQuery = `INSERT INTO records (income, amount, category, date, time, payee, note, userEmail) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
  const record = await client.query(createRecordQuery, [
    income,
    amount,
    category,
    date,
    time,
    payee,
    note,
    userEmail,
  ]);
  return record;
};

export const createNewRecord = async (req, res) => {
  const { income, amount, category, date, time, payee, note, userEmail } =
    req.body;
  try {
    const record = await recordCreate(
      income,
      amount,
      category,
      date,
      time,
      payee,
      note,
      userEmail
    );

    return record;
  } catch (err) {
    console.log(err.message);
  }
};