import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios, { AxiosResponse } from 'axios'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: "read:user"
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      scope: 'r_liteprofile'
    })
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { name, email } = user
      console.log(name, user)
      const response = await axios.post<AxiosResponse>('http://localhost:3000/api/users', {
        name,
        email
      })

      const status = response.status

      console.log(status)
      if (status === 200) {
        return true
      } else {
        return false
      }
    }
  }
})