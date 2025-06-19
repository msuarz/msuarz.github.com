import Layout from '../../components/Layout'

export default function Panorama() {
  const images = [
    {
      title: 'miami',
      src: '/img/panorama/miami/brickell_bridge.jpg',
      href: '/pics/miami'
    },
    {
      title: 'italy', 
      src: '/img/panorama/italy/riomaggiore.jpg',
      href: '/pics/italy'
    },
    {
      title: 'france',
      src: '/img/panorama/france/louvre.jpg', 
      href: '/pics/france'
    },
    {
      title: 'spain',
      src: '/img/panorama/spain/segovia.jpg',
      href: '/pics/spain'
    }
  ]

  return (
    <Layout title="Panorama Photos - msuarz">
      <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={image.title} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <a href={image.href}>
                <img 
                  src={image.src} 
                  className="d-block w-100" 
                  alt={image.title}
                  style={{ maxHeight: '600px', objectFit: 'cover' }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>{image.title}</h1>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            var carousel = new bootstrap.Carousel(document.getElementById('imageCarousel'), {
              interval: 3000,
              ride: 'carousel'
            });
          });
        `
      }} />
    </Layout>
  )
}