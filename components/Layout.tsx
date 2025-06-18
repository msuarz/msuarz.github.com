import Head from 'next/head'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title = 'msuarz' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/msuarz.css" rel="stylesheet" />
        <link href="/css/msuarz.css" rel="stylesheet" />
        <style jsx>{`
          body {
            padding-top: 60px;
          }
        `}</style>
      </Head>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  about
                </a>
                <ul className="dropdown-menu">
                  <li><span className="dropdown-item-text text-muted">me</span></li>
                  <li><a className="dropdown-item" href="/about/resume">resume</a></li>
                  <li><span className="dropdown-item-text">timeline</span></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="/apps">apps</a></li>
              <li className="nav-item"><a className="nav-link" target="_blank" href="http://msuarz.blogspot.com/">blog</a></li>
              <li className="nav-item"><a className="nav-link" href="/talks">talks</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  books
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/books/epub">epub</a></li>
                  <li><a className="dropdown-item" href="/books/paper">paper</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="/movies">movies</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  pics
                </a>
                <ul className="dropdown-menu">
                  <li><span className="dropdown-item-text">lab</span></li>
                  <li><a className="dropdown-item" href="/pics/logopedia">logopedia</a></li>
                  <li><a className="dropdown-item" href="/pics/panorama">panorama</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  social
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" target="_blank" href="https://github.com/msuarz">github</a></li>
                  <li><a className="dropdown-item" target="_blank" href="https://twitter.com/msuarz">twitter</a></li>
                  <li><a className="dropdown-item" target="_blank" href="http://linkedin.com/pub/maykel-suarez/3/680/651">linkedin</a></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <img src="http://www.gravatar.com/avatar/d81623c49927f1335a4c9128d3d41857.png?s=32" alt="home" className="rounded" />
                </a>
              </li>   
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        {children}
        <footer>
          {/* Footer content can go here */}
        </footer>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  )
}