import type { NextPage } from 'next'
import { useValues } from "../hook/useFormValues"
import Link from "next/link"

const Home: NextPage = () => {
  const { values } = useValues()
  return (
    <div>
      <h1>Visit one of the following</h1>
      <ul>
        <li> <Link href="/ssr/?foo=fooValueFromUrl&bar=barValueFromUrl" >Server side rendering</Link></li>

        <li> <Link href="/static?foo=fooValueFromUrl&bar=barValueFromUrl" >Static side generation</Link></li>
      </ul>
    </div>
  )
}

export default Home
