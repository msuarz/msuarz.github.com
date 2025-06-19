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
            <div style={{
              background: 'white',
              border: '3px solid #333',
              borderRadius: '30px',
              padding: '20px 25px',
              marginLeft: '30px',
              marginTop: '10px',
              position: 'relative',
              boxShadow: '3px 3px 0px #ccc'
            }}>
              {/* Cloud tail */}
              <div style={{
                position: 'absolute',
                left: '-20px',
                bottom: '30px'
              }}>
                <div style={{
                  width: '15px',
                  height: '15px',
                  background: 'white',
                  border: '3px solid #333',
                  borderRadius: '50%',
                  marginBottom: '8px'
                }}></div>
                <div style={{
                  width: '10px',
                  height: '10px',
                  background: 'white',
                  border: '3px solid #333',
                  borderRadius: '50%',
                  marginLeft: '-8px'
                }}></div>
              </div>
              
              <p style={{ margin: '0 0 15px 0', fontWeight: 'bold', fontSize: '16px' }}>
                Hi there, I'm Mike Suarez.
              </p>
              
              <p style={{ margin: '0 0 15px 0', lineHeight: '1.4' }}>
                This is my personal website, it is a collection of things I like.
                <br/>
                Which, in a way, should give an idea of whom I am.
              </p>

              <p style={{ margin: '0', lineHeight: '1.4' }}>
                There's a lot of computer stuff since I consider myself a natural born programmer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}