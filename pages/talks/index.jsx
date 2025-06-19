import Layout from '../../components/Layout'

export default function Talks() {
  return (
    <Layout title="Talks - msuarz">
      <div className="row">
        <div className="col-6">
          <iframe src="http://player.vimeo.com/video/63214839" width="500" height="375" frameBorder="0"
                  allow="fullscreen"></iframe>
        </div>
        <div className="col-6">
          <div className="alert alert-danger" style={{ padding: '8px 8px 8px 20px' }}>
            <span className="badge bg-danger float-end">agile 2011</span>
            <h2>Raconteur</h2>
          </div>
          <p>
            Presented with my wife. Our 45 minutes of fame.<br/>
            This was my last talk about Raconteur. It's quite polished.<br/>
            However I did an awful job recording it. I was too far from the mic during the first 9 mins<br/>
            These are my favorite slides among all.
          </p>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-6">
          <div className="alert alert-success" style={{ padding: '8px 8px 8px 20px' }}>
            <span className="badge bg-success float-end">codecamp 2011</span>
            <h2>Raconteur</h2>
          </div>
          <p>
            First time I do the same talk with the same slides.<br/>
            This one is better than the one at work. I even got a haircut.
          </p>
        </div>
        <div className="col-6">
          <iframe src="http://player.vimeo.com/video/63064897" width="500" height="375" frameBorder="0"
                  allow="fullscreen"></iframe>
        </div>
      </div>

      <hr />
        
      <div className="row">
        <div className="col-6">
          <iframe src="http://player.vimeo.com/video/63064898" width="500" height="375" frameBorder="0"
                  allow="fullscreen"></iframe>
        </div>
        <div className="col-6">
          <div className="alert alert-info" style={{ padding: '8px 8px 8px 20px' }}>
            <span className="badge bg-info float-end">ultimate 2011</span>
            <h2>Raconteur</h2>
          </div>
          <p>
            My last lunch and learn. I did a few in a row and stopped.<br/>
            In 2013 lunch & Learn sessions started to get company support.<br/>
            Presenters get $100 bonus now and the company provides pizza.<br/>
            I'm like $500 short in my bank account but I'll be back. Muuuuuuuuahhahahaha ....
          </p>
        </div>
      </div>
      
      <hr />
      
      <div className="row">
        <div className="col-6">
          <div className="alert alert-warning" style={{ padding: '8px 8px 8px 20px' }}>
            <span className="badge bg-warning float-end">ultimate 2009</span>
            <h2>|Fitnesse in |flow| mode|</h2>
          </div>
          <p>
            This one was for my team only. I treat them to pizza meself.<br/>
            It kicked up a lot of improvements in our testing approach.<br/>
            Sadly it didn't spread over the company.<br/>
            In 2012 the whole company started using an approach similar to the one developed by my team.<br/>
            But we are still testing thru the UI.
          </p>
        </div>
        <div className="col-6">
          <iframe src="http://player.vimeo.com/video/9009988" width="500" height="375" frameBorder="0"
                  allow="fullscreen"></iframe>
        </div>
      </div>
    </Layout>
  )
}