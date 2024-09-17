"use client";

import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import Link from "next/link";
import { signIn } from "@/app/data/actions/auth-actions";
import { useFormState } from "react-dom";
import { ZodErrors } from "./ui/zod-errors";
import { SubmitButton } from "./ui/submit-button";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const INITIAL_STATE = {
  data: null,
  message: null,
  error: null,
};

export default function SigninForm() {
  const [formState, formAction] = useFormState(signIn, INITIAL_STATE);

  useEffect(() => {
    console.log(formState);

    if (formState.message) {
      toast({
        title: "Ошибка",
        description: formState.message,
      });
    }
  }, [formState]);

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="username or email"
              />
              {formState.error?.email?.length > 0 && (
                <ZodErrors error={formState.error?.email} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
              {formState.error?.password?.length > 0 && (
                <ZodErrors error={formState.error?.password} />
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <SubmitButton
              className="w-full"
              text="Sign In"
              loadingText="Loading"
            />
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <Link
            className="underline ml-2"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
