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
          <div className="position-relative" style={{ marginTop: '20px' }}>
            <img 
              src="/img/thought-cloud.png" 
              alt="thought cloud"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              textAlign: 'center',
              color: '#333'
            }}>
              <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', fontSize: '16px' }}>
                Hi there, I'm Mike Suarez.
              </p>
              
              <p style={{ margin: '0 0 8px 0', fontSize: '13px', lineHeight: '1.3' }}>
                This is my personal website, it is a collection of things I like.
                Which, in a way, should give an idea of whom I am.
              </p>

              <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.3' }}>
                There's a lot of computer stuff since I consider myself a natural born programmer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}