import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <br />
      <div className="row">
        <div className="col-3">
          <img style={{ float: 'left' }} src="img/minime.png" />
        </div>
        <div className="col-8">
          <div className="alert alert-info">
            <p><strong>Hi there, I'm Mike Suarez.</strong></p>
            
            <p>
              This is my personal website, it is a collection of things I like.
              <br/>
              Which, in a way, should give an idea of whom I am.
            </p>

            <p>There's a lot of computer stuff since I consider myself a natural born programmer.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}