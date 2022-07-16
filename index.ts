import { serve } from "https://deno.land/std@0.148.0/http/server.ts";

serve(async (_req) => {
  const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"],
  );

  const exportedKey = await crypto.subtle.exportKey("jwk", key);

  // console.log(JSON.stringify(exportedKey));

  return new Response(JSON.stringify(exportedKey), {
    headers: { "content-type": "application/json" },
  });
});
