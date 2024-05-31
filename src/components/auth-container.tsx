"use client"
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs'

export default function AuthContainer() {
  return (
    <div className='flex flex-col gap-2'>
      <LoginLink>Sign in</LoginLink>

      <LogoutLink>Log out</LogoutLink>

    </div>
  )
}
