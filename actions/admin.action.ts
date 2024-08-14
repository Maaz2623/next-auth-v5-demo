"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return {
      error: "Allowed!",
    };
  } else {
    return {
      success: "Forbidden!",
    };
  }
};
