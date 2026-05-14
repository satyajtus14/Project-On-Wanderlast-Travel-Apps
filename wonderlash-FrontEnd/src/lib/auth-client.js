import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: "http://localhost:3000"   // Base Dev URL of your app
   

})

export const { signIn, signUp, useSession } = createAuthClient()