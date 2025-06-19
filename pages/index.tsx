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
          <div className="position-relative">
            <div className="bg-light border rounded-pill px-4 py-3 shadow-sm" style={{
              position: 'relative',
              marginLeft: '20px'
            }}>
              <div style={{
                position: 'absolute',
                left: '-10px',
                top: '20px',
                width: '0',
                height: '0',
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent',
                borderRight: '15px solid #f8f9fa'
              }}></div>
              
              <p className="mb-2"><strong>Hi there, I'm Mike Suarez.</strong></p>
              
              <p className="mb-2">
                This is my personal website, it is a collection of things I like.
                <br/>
                Which, in a way, should give an idea of whom I am.
              </p>

              <p className="mb-0">There's a lot of computer stuff since I consider myself a natural born programmer.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}