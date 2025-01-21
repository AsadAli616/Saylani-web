"use server";

import { revalidatePath } from "next/cache";

export const clearHistory = async () => {
  revalidatePath("/");
};
