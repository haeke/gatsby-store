import React from "react"
import BackgroundImage from "gatsby-background-image"

// This component will use the gatsby-background-image to load inside this component.

const BackgroundSection = ({ img, backgroundStyle, title, children }) => {
  return (
    <BackgroundImage className={backgroundStyle} fluid={img} Tag="section">
      <h1 className="text-white text-uppercase text-center display-4 font-weight-bold title">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "Default Title",
  backgroundStyle: "default-background",
}

export default BackgroundSection
