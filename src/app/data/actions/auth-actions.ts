"use server";

import { z } from "zod";
import { signinUserService } from "../services/auth-service";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const config = {
  maxAge: 60 * 60 * 24,
  path: "/",
  httpOnly: true,
  domain: "localhost",
  secure: false,
};

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function signIn(prevState: any, formData: FormData) {
  const validatedFields = SignInSchema.safeParse({
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      error: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register.",
    };
  }

  const responseData = await signinUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      error: null,
      message: "Oops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      error: null,
      message: "Failed to Sign In.",
    };
  }

  cookies().set("jwt", responseData.token, config);
  redirect("/dashboard");
}

export async function signOut() {
  cookies().set("jwt", "", { ...config, maxAge: 0 });
  redirect("/");
}
