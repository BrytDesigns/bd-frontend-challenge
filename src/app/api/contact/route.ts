import { withZod } from "./middleware";

export const dynamic = "force-dynamic";

export const POST = withZod(async (request, data) => {
  console.log("Successfully received data", data);
  return new Response(
    JSON.stringify({
      data: {
        message:
          "Thank you for contacting us. We will get back to you as soon as possible.",
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
});
