import React from 'react'
import { CreatorSection } from 'app/features/creator/creator'
import Head from 'next/head'
import { WorkingSpace } from '../../components/working-space'

export default function Page() {
  return (
    <>
      <Head>
        <title>Creator</title>
      </Head>
      <WorkingSpace />
      <CreatorSection />
    </>
  )
}
