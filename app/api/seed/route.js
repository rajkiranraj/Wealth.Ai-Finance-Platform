import { seedTransactions } from "@/actions/seed";

export async function GET() {
  const result = await seedTransactions();
  //se
  return Response.json(result);
}
