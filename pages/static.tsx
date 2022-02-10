import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useValues } from "../hook/useFormValues"

const Home: NextPage = () => {
  const router = useRouter()
  const { values } = useValues()
  return (
    <div>
      <h1>This page is staticly generated</h1>
      <Link href="/" >go back</Link>
      <h3>1. Visit</h3>
      <Link href="/static?foo=fooValueFromUrl&bar=barValueFromUrl" >localhost:3000/static?foo=fooValueFromUrl&bar=barValueFromUrl</Link>
      <h3>2. Reload</h3>
      <h3>3. With static side generation values are NOT the same!</h3>
      <table>
        <tr>
          <td>Values from context:</td>
          <td>{JSON.stringify(values)}</td>
        </tr>
        <tr>
          <td>Values from URL:</td>
          <td>{JSON.stringify(router.query)}</td>
        </tr>
      </table>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  return {
    props: {}
  }
}
