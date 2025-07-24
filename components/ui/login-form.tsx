'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import { useCheckEmail } from '@/hooks/mutations/useCheckEmail';

import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState('')


  
  const { mutate, data, isPending, isSuccess, isError, error } = useCheckEmail();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isPending) return;
    mutate({ email });
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="rounded-[6px] bg-white dark:bg-gray-900 border border-border shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-gray-900 dark:text-white">Welcome back</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Login with your Apple or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full gap-2">
                  {/* Apple logo with color */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                      fill="currentColor"
                      className="text-gray-900 dark:text-gray-100"
                    />
                  </svg>
                  Login with Apple
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  {/* Google logo with colors */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                      <path
                        fill="#4285F4"
                        d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                      />
                      <path
                        fill="#34A853"
                        d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                      />
                      <path
                        fill="#EA4335"
                        d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                      />
                    </g>
                  </svg>
                  Login with Google
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-white dark:bg-gray-900 text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>

              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label className="text-gray-900 dark:text-white" htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@servicyee.com"
                    className="rounded-[4px] focus:bg-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <span>
                  {isError && !isPending && (
                    <p className="text-red-600 text-sm">Error: {error.message}</p>
                  )}

                  {isSuccess && !isPending && (
                    <p
                      className={cn("text-sm", data?.exists ? "text-yellow-600" : "text-green-600")}
                    >
                      {data.exists
                        ? "This email already exists in our system."
                        : "Email is available."}
                    </p>
                  )}

                </span>
                <Button
                  type="submit"
                  disabled={isPending || !email}
                  className="dark:text-white w-full bg-[#0077B6] hover:bg-[#35a5e1] rounded-[4px]"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    </>
                  ) : (
                    <span>Continue</span>
                  )}
                </Button>

              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  )
}
