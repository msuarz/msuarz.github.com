import Layout from '../../components/Layout'

export default function Apps() {
  return (
    <Layout title="Apps - msuarz">
      <div className="row">
        <h2><code>1998-2008</code> Early years</h2>
        <hr />
        <div className="col-6">
          <div className="alert alert-info">
            <p>
              Here's a showcase of the most relevant apps from these years.<br/>
              They range from Delphi, VBasic, C++, Asp, Java, C#, WPF, Silverlight.<br/>
              I fully designed the uglier ones and collaborated with designer on the prettiers.
            </p>
          </div>
        </div>

        <div className="col-6">
          <iframe src="http://www.slideshare.net/slideshow/embed_code/17968308" width="100%" height="450"></iframe>
        </div>
      </div>
      <br />
      <div className="row">
        <h2><code>2009-2013</code> Open Source years</h2>
        <hr />
      </div>
    </Layout>
  )
}