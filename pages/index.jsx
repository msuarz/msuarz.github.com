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
          <div style={{ position: 'relative' }}>
            <img 
              src="/img/cloud9.png" 
              alt="thought cloud"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              textAlign: 'center',
              width: '80%'
            }}>
              <p style={{ margin: '0 0 15px 0', fontWeight: 'bold', fontSize: '16px' }}>
                Hi there, I'm Mike Suarez.
              </p>
              
              <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.4' }}>
                This is my personal website, it is a collection of things I like.
                <br/>
                Which, in a way, should give an idea of whom I am.
              </p>

              <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.4' }}>
                There's a lot of computer stuff since I consider myself a natural born programmer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}