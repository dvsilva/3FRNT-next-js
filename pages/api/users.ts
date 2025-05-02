import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../interfaces/User";

// Fake users data
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  // throw new Error("Erro interno do servidor");
  // Get data from your database
  res.status(200).json(users);
}
