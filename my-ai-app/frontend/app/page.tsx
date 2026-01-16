"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { toast } from "sonner"
import { Bot, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { login, register } from "@/api/auth"

// Define validation schemas
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
})

const registerSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export default function AuthPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("login")

  // --- Login Form ---
  const loginForm = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validatorAdapter: zodValidator(),
    validators: {
        onChange: loginSchema
    },
    onSubmit: async ({ value }) => {
      try {
        const data = await login(value)
        localStorage.setItem("token", data.access_token)
        toast.success("Welcome back!", {
            description: "You have successfully logged in."
        })
        router.push("/home") 
      } catch (err: any) {
        toast.error("Login Failed", {
            description: err.message
        })
      }
    },
  })

  // --- Register Form ---
  const registerForm = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validatorAdapter: zodValidator(),
    validators: {
        onChange: registerSchema
    },
    onSubmit: async ({ value }) => {
      try {
        await register(value)
        toast.success("Account Created", {
            description: "Please log in with your new account."
        })
        setActiveTab("login")
        // Reset login form for convenience?
        loginForm.setFieldValue('email', value.email)
      } catch (err: any) {
        toast.error("Registration Failed", {
            description: err.message
        })
      }
    },
  })

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
      <div className="mb-8 flex flex-col items-center space-y-2 text-center">
        <div className="rounded-full bg-primary p-3">
            <Bot className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome to My AI App</h1>
        <p className="text-sm text-muted-foreground">Enter your email to sign in or create an account</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-sm">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your password to sign in to your account.
              </CardDescription>
            </CardHeader>
            <form onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                loginForm.handleSubmit()
            }}>
              <CardContent className="space-y-4">
                <loginForm.Field
                    name="email"
                    children={(field) => (
                        <div className="space-y-2">
                            <Label htmlFor="login-email">Email</Label>
                            <Input 
                                id="login-email" 
                                placeholder="m@example.com"
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                            {field.state.meta.errors ? (
                                <p className="text-sm text-destructive">
                                    {field.state.meta.errors.map((err) => err?.message || err).join(", ")}
                                </p>
                            ) : null}
                        </div>
                    )}
                />
                <loginForm.Field
                    name="password"
                    children={(field) => (
                        <div className="space-y-2">
                            <Label htmlFor="login-password">Password</Label>
                            <Input 
                                id="login-password" 
                                type="password"
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                             {field.state.meta.errors ? (
                                <p className="text-sm text-destructive">
                                    {field.state.meta.errors.map((err) => err?.message || err).join(", ")}
                                </p>
                            ) : null}
                        </div>
                    )}
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <loginForm.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <Button className="w-full" type="submit" disabled={!canSubmit || isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </Button>
                  )}
                />
                <p className="px-8 text-center text-xs text-muted-foreground">
                    By clicking continue, you agree to our{" "}
                    <a href="/terms" className="underline underline-offset-4 hover:text-primary">Terms</a>
                    {" "}and{" "}
                    <a href="/privacy" className="underline underline-offset-4 hover:text-primary">Privacy Policy</a>.
                </p>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                Enter your email below to create your account.
              </CardDescription>
            </CardHeader>
             <form onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                registerForm.handleSubmit()
            }}>
              <CardContent className="space-y-4">
                 <registerForm.Field
                    name="email"
                    children={(field) => (
                        <div className="space-y-2">
                            <Label htmlFor="reg-email">Email</Label>
                            <Input 
                                id="reg-email" 
                                placeholder="m@example.com"
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                            {field.state.meta.errors ? (
                                <p className="text-sm text-destructive">
                                    {field.state.meta.errors.map((err) => err?.message || err).join(", ")}
                                </p>
                            ) : null}
                        </div>
                    )}
                />
                <registerForm.Field
                    name="password"
                    children={(field) => (
                        <div className="space-y-2">
                            <Label htmlFor="reg-password">Password</Label>
                            <Input 
                                id="reg-password" 
                                type="password"
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                             {field.state.meta.errors ? (
                                <p className="text-sm text-destructive">
                                    {field.state.meta.errors.map((err) => err?.message || err).join(", ")}
                                </p>
                            ) : null}
                        </div>
                    )}
                />
              </CardContent>
              <CardFooter>
                <registerForm.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <Button className="w-full" type="submit" disabled={!canSubmit || isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? "Creating account..." : "Create Account"}
                    </Button>
                  )}
                />
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
