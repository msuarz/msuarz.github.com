import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <br />
      <div className="row">
        <div className="span3">
          <img style={{ float: 'left' }} src="img/minime.png" />
        </div>
        <div className="span8 alert alert-info">
          <p>Hi there, I'm Mike Suarez. 🤖 Claude was here!</p>
          
          <p>
            This is my personal website, it is a collection of things I like.
            <br/>
            Which, in a way, should give an idea of whom I am.
          </p>

          <p>There's a lot of computer stuff since I consider myself a natural born programmer.</p>
        </div>
      </div>
    </Layout>
  )
}