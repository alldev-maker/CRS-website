import React, { ReactNode } from "react"

import Header from "./header"

type LayoutProp = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
