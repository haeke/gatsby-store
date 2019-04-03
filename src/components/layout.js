/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import NavBar from "../components/globals/navbar"
import Footer from "./globals/footer"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
