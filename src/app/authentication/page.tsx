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

const AuthenticationPage = () => {
    return <div className="h-screen w-screen flex items-center justify-center">

    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="register">
        <TabsList>
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Criar Conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Faça login para continuar.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
            
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <SignUpForm/>
        </TabsContent>
      </Tabs>
    </div>

    </div>
};

export default AuthenticationPage;