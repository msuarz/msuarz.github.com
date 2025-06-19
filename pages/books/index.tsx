import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Books() {
  return (
    <Layout title="Books - msuarz">
      <div className="row">
        <div className="col-6">
          <Link href="/books/epub">
            <img src="/img/epub.png" alt="EPUB Books" className="img-fluid" />
          </Link>
        </div>
        <div className="col-6">
          <Link href="/books/paper">
            <img src="/img/paper.jpg" alt="Paper Books" className="img-fluid" />
          </Link>
        </div>
      </div>
    </Layout>
  )
}