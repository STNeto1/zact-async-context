"use server";

import { z } from "zod";
import { zact } from "zact/server";
import { cookies, headers } from "next/headers";

export const validatedAction = zact(z.object({ stuff: z.string() }))(
  async () => {
    // const cookieJar = cookies();
    // const headerList = headers();

    return { message: "hello" };
  }
);
