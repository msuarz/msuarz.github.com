import Layout from '../../components/Layout'

export default function France() {
  const images = [
    {
      title: 'nice',
      src: '/img/panorama/france/nice.jpg',
      href: 'https://www.dropbox.com/s/8nixphmxzec0en4/nice.jpg'
    },
    {
      title: 'nice', 
      src: '/img/panorama/france/nice1.jpg',
      href: 'https://www.dropbox.com/s/ilc12i95mkshwpd/Nice.jpg'
    },
    {
      title: 'montparnasse',
      src: '/img/panorama/france/montparnasse.jpg',
      href: 'https://www.dropbox.com/s/frcki5eyat96hib/montparnase.jpg'
    },
    {
      title: 'parthenon',
      src: '/img/panorama/france/parthenon.jpg', 
      href: 'https://www.dropbox.com/s/ccs0ry7khrvsts1/parthenon.jpg'
    },
    {
      title: 'seine',
      src: '/img/panorama/france/seine.jpg',
      href: 'https://www.dropbox.com/s/ou5b0f0gpnckm9m/sena.jpg'
    },
    {
      title: 'louvre',
      src: '/img/panorama/france/louvre.jpg',
      href: 'https://www.dropbox.com/s/1k1wb5gjo44fbhz/louvre.jpg'
    }
  ]

  return (
    <Layout title="France Photos - msuarz">
      <div id="franceCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <a href={image.href} target="_blank" rel="noopener noreferrer">
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
        
        <button className="carousel-control-prev" type="button" data-bs-target="#franceCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#franceCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Layout>
  )
}