import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <br />
      <div className="row">
        <div className="col-3">
          <img style={{ float: 'left', marginTop: '100px', transform: 'scale(1.2)' }} src="img/minime.png" />
        </div>
        <div className="col-8">
          <img 
            src="/img/speech-bubble.svg" 
            alt="speech bubble"
            style={{ width: '441px', height: 'auto', marginTop: '-70px' }}
          />
        </div>
      </div>
    </Layout>
  )
}