import Layout from '../../components/Layout'

export default function Miami() {
  const images = [
    {
      title: 'brickell key',
      src: '/img/panorama/miami/brickell_key.jpg',
      href: 'https://www.dropbox.com/s/q5d46xifscp1ch4/Miami8.jpg'
    },
    {
      title: 'venetian causeway', 
      src: '/img/panorama/miami/venetian_causeway.jpg',
      href: 'https://www.dropbox.com/s/huzzo3xfiucrdn2/Miami2.jpg'
    },
    {
      title: 'midtown',
      src: '/img/panorama/miami/midtown.jpg',
      href: 'https://www.dropbox.com/s/h1wds1re4v9d4p6/Miami3.jpg'
    },
    {
      title: 'cruise port',
      src: '/img/panorama/miami/cruise_port.jpg', 
      href: 'https://www.dropbox.com/s/nqdcot1ly4qpud7/Miami4.jpg'
    },
    {
      title: 'south beach',
      src: '/img/panorama/miami/south_beach.jpg',
      href: 'https://www.dropbox.com/s/37hq703bay1knv6/Miami14.jpg'
    },
    {
      title: 'brickell bridge',
      src: '/img/panorama/miami/brickell_bridge.jpg',
      href: 'https://www.dropbox.com/s/zzec5aa1nk4s7ez/Miami6.jpg'
    }
  ]

  return (
    <Layout title="Miami Photos - msuarz">
      <div id="miamiCarousel" className="carousel slide" data-bs-ride="carousel">
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
        
        <button className="carousel-control-prev" type="button" data-bs-target="#miamiCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#miamiCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Layout>
  )
}