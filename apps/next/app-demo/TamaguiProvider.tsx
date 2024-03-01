'use client'

import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { ColorScheme, NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { useServerInsertedHTML } from 'next/navigation'
import React from 'react'
import { StyleSheet } from 'react-native'
import { config, TamaguiProvider as TamaguiProviderOG } from '@my/ui'

export const TamaguiProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useRootTheme()

  useServerInsertedHTML(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const rnwStyle = StyleSheet.getSheet()
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }} id={rnwStyle.id} />
        <style
          dangerouslySetInnerHTML={{
            __html: config.getCSS({
              // if you are using "outputCSS" option, you should use this "exclude"
              // if not, then you can leave the option out
              exclude: process.env.NODE_ENV === 'production' ? 'design-system' : null,
            }),
          }}
        />
      </>
    )
  })

  return (
    <NextThemeProvider
      skipNextHead
      onChangeTheme={(next) => {
        setTheme(next as ColorScheme)
      }}
    >
      <TamaguiProviderOG config={config} themeClassNameOnRoot defaultTheme={theme}>
        {children}
      </TamaguiProviderOG>
    </NextThemeProvider>
  )
}
