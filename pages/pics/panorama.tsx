import Layout from '../../components/Layout'

export default function Panorama() {
  return (
    <Layout title="Panorama Photos - msuarz">
      <h2>Panorama Photos</h2>
      
      <h3>France</h3>
      <div className="row">
        <div className="col-4"><img src="/img/panorama/france/louvre.jpg" className="img-fluid" alt="Louvre" /></div>
        <div className="col-4"><img src="/img/panorama/france/nice.jpg" className="img-fluid" alt="Nice" /></div>
        <div className="col-4"><img src="/img/panorama/france/seine.jpg" className="img-fluid" alt="Seine" /></div>
      </div>
      
      <h3>Italy</h3>
      <div className="row">
        <div className="col-4"><img src="/img/panorama/italy/manarola.jpg" className="img-fluid" alt="Manarola" /></div>
        <div className="col-4"><img src="/img/panorama/italy/portofino.jpg" className="img-fluid" alt="Portofino" /></div>
        <div className="col-4"><img src="/img/panorama/italy/rapallo.jpg" className="img-fluid" alt="Rapallo" /></div>
      </div>
      
      <h3>Miami</h3>
      <div className="row">
        <div className="col-4"><img src="/img/panorama/miami/brickell_bridge.jpg" className="img-fluid" alt="Brickell Bridge" /></div>
        <div className="col-4"><img src="/img/panorama/miami/south_beach.jpg" className="img-fluid" alt="South Beach" /></div>
        <div className="col-4"><img src="/img/panorama/miami/midtown.jpg" className="img-fluid" alt="Midtown" /></div>
      </div>
      
      <h3>Spain</h3>
      <div className="row">
        <div className="col-4"><img src="/img/panorama/spain/madrid.jpg" className="img-fluid" alt="Madrid" /></div>
        <div className="col-4"><img src="/img/panorama/spain/las_palmas.jpg" className="img-fluid" alt="Las Palmas" /></div>
        <div className="col-4"><img src="/img/panorama/spain/segovia.jpg" className="img-fluid" alt="Segovia" /></div>
      </div>
    </Layout>
  )
}