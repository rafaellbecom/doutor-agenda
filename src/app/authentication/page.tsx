"use client"

import { AppWindowIcon, CodeIcon } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import SignUpForm from "./components/sign-up-form"
import LoginForm from "./components/login-form"

const AuthenticationPage = () => {
    return <div className="h-screen w-screen flex items-center justify-center">

    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="login">
        <TabsList>
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Criar Conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm/>
        </TabsContent>
        <TabsContent value="register">
          <SignUpForm/>
        </TabsContent>
      </Tabs>
    </div>

    </div>
};

export default AuthenticationPage;