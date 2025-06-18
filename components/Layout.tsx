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
      
      <div className="navbar navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <div className="nav-collapse">
              <ul className="nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="">
                    about <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="muted">me</a></li>
                    <li><a href="/about/resume">resume</a></li>
                    <li><a>timeline</a></li>
                  </ul>
                </li>
                <li><a href="/apps">apps</a></li>
                <li><a target="_blank" href="http://msuarz.blogspot.com/">blog</a></li>
                <li><a href="/talks">talks</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="">
                    books <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="/books/epub">epub</a></li>
                    <li><a href="/books/paper">paper</a></li>
                  </ul>
                </li>
                <li><a href="/movies">movies</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="">
                    pics <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a>lab</a></li>
                    <li><a href="/pics/logopedia">logopedia</a></li>
                    <li><a href="/pics/panorama">panorama</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="">
                    social <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a target="_blank" href="https://github.com/msuarz">github</a></li>
                    <li><a target="_blank" href="https://twitter.com/msuarz">twitter</a></li>
                    <li><a target="_blank" href="http://linkedin.com/pub/maykel-suarez/3/680/651">linkedin</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav pull-right" id="home-icons">
                <li className="divider-vertical"></li>
                <li>
                  <a href="/">
                    <img src="http://www.gravatar.com/avatar/d81623c49927f1335a4c9128d3d41857.png?s=32" alt="home" />
                  </a>
                </li>   
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {children}
        <footer>
          {/* Footer content can go here */}
        </footer>
      </div>

      <script src="/js/jquery.js"></script>
      <script src="/js/bootstrap.js"></script>
    </>
  )
}