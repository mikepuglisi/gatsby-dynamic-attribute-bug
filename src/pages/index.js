import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({location}) => {
  const params = new URLSearchParams(location.search);
  const color = params.get('color');
  return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        { color ?
          <p style={{color: color}}>
            I SHOULD BE THE COLOR {color} in production mode even after hitting CTRL+F5 (hard referesh)
          </p> :
          <p>
            No Color was passed. Add ?color=blue to URL and hit CTRL+F5 to ensure a hard refresh
          </p>
        }

        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }

export default IndexPage
