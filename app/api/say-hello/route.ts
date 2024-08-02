export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  // const requestData = await request.json();
  // console.log("requestData - ", requestData);

  const data = {
    hello: "world",
  };

  return Response.json({ data });
}
