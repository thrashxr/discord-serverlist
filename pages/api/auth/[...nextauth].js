import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from '@next-auth/prisma-adapter'


export default NextAuth({
    providers: [
        Providers.Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ],

})
