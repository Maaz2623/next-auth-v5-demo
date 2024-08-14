"use client"
import { auth } from '@/auth'
import UserInfo from '@/components/auth/user-info'
import { useCurrentUser } from '@/hooks/use-current-user'
import { currentUser } from '@/lib/auth'
import React from 'react'

const ClientPage = () => {

    const user = useCurrentUser()

  return (
    <UserInfo user={user} label='📱Client component' />
  )
}

export default ClientPage