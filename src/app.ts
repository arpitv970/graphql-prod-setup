import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, Express with TypeScript!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
