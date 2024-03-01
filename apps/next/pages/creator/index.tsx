import React from 'react'
import { CreatorSection } from 'app/features/creator/creator'
import Head from 'next/head'
import { MaterialSelector } from '../../components/material-selector'

export default function Page() {
  return (
    <>
      <Head>
        <title>Creator</title>
      </Head>
      <MaterialSelector />
      <CreatorSection />
    </>
  )
}
