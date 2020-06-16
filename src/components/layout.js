import React from "react"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

import Header from "./header"

const Layout = props => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html, body {
            padding: 0;
            margin: 0;
            background: white;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      />
      <Header />
      <div>
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default Layout
