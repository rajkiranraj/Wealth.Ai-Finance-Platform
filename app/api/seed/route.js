import { seedTransactions } from "@/actions/seed";

export async function GET() {
  const result = await seedTransactions();
  //seed
  return Response.json(result);
}
