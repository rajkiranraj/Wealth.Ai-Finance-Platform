import { seedTransactions } from "@/actions/seed";

export async function GET() {
  const result = await seedTransactions();
  //s
  return Response.json(result);
}
