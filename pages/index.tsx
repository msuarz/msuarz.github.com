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
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-8px) rotate(1deg); }
            }
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            @keyframes glow {
              0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.1); }
              50% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.2); }
            }
            .thought-cloud {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              border: none;
              border-radius: 25px;
              padding: 25px 30px;
              margin-left: 35px;
              margin-top: 15px;
              position: relative;
              animation: float 6s ease-in-out infinite, glow 4s ease-in-out infinite;
              box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
              color: white;
              overflow: hidden;
            }
            .thought-cloud::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
              animation: shimmer 3s infinite;
            }
            .cloud-tail {
              position: absolute;
              left: -25px;
              bottom: 35px;
            }
            .bubble {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              border-radius: 50%;
              animation: float 4s ease-in-out infinite;
            }
            .bubble:nth-child(1) {
              width: 18px;
              height: 18px;
              margin-bottom: 10px;
              animation-delay: -1s;
            }
            .bubble:nth-child(2) {
              width: 12px;
              height: 12px;
              margin-left: -10px;
              animation-delay: -2s;
            }
            .text-glow {
              text-shadow: 0 0 10px rgba(255,255,255,0.5);
            }
          `}</style>
          
          <div className="position-relative">
            <div className="thought-cloud">
              <div className="cloud-tail">
                <div className="bubble"></div>
                <div className="bubble"></div>
              </div>
              
              <p style={{ margin: '0 0 18px 0', fontWeight: '600', fontSize: '18px', fontFamily: '"Segoe UI", system-ui, sans-serif' }} className="text-glow">
                Hi there, I'm Mike Suarez.
              </p>
              
              <p style={{ margin: '0 0 18px 0', lineHeight: '1.6', fontSize: '15px', fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
                This is my personal website, it is a collection of things I like.
                <br/>
                Which, in a way, should give an idea of whom I am.
              </p>

              <p style={{ margin: '0', lineHeight: '1.6', fontSize: '15px', fontFamily: '"Segoe UI", system-ui, sans-serif' }}>
                There's a lot of computer stuff since I consider myself a natural born programmer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}