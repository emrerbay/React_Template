import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}

const Footer = (props) => {
  // eslint-disable-next-line
  const { children, ...attributes } = props

  return (
    <React.Fragment>
      <span>
        <a href="http://www.tpao.gov.tr/en">&copy; 2020 Türkiye Petrolleri</a>
      </span>
      <span className="ml-auto">Bilişim Teknolojileri Daire Başkanlığı</span>
    </React.Fragment>
  )
}

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps

export default Footer
