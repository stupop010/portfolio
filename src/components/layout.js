import React from "react"
import PropTypes from "prop-types"
import CookieConsent from "react-cookie-consent"

import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        This site uses cookies ...
      </CookieConsent>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
