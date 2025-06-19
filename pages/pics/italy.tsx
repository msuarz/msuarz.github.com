import Layout from '../../components/Layout'

export default function Italy() {
  const images = [
    {
      title: 'manarola',
      src: '/img/panorama/italy/manarola.jpg',
      href: 'https://www.dropbox.com/s/p29yt69q5qbfbrp/manarola3.png'
    },
    {
      title: 'manarola', 
      src: '/img/panorama/italy/manarola1.jpg',
      href: 'https://www.dropbox.com/s/gvw6umtbgsxmgwf/manarola4.jpg'
    },
    {
      title: 'manarola',
      src: '/img/panorama/italy/manarola2.jpg',
      href: 'https://www.dropbox.com/s/1g3dwjyu27fiu1a/manarola7.jpg'
    },
    {
      title: 'portofino',
      src: '/img/panorama/italy/portofino.jpg', 
      href: 'https://www.dropbox.com/s/chmad9rgesa8mj8/portofino.jpg'
    },
    {
      title: 'rapallo',
      src: '/img/panorama/italy/rapallo.jpg',
      href: 'https://www.dropbox.com/s/h4pyh8gzp2sr9hu/rapallo.png'
    },
    {
      title: 'riomaggiore',
      src: '/img/panorama/italy/riomaggiore.jpg',
      href: 'https://www.dropbox.com/s/2l5a1l07iao80hp/riomaggiore.jpg'
    }
  ]

  return (
    <Layout title="Italy Photos - msuarz">
      <div id="italyCarousel" className="carousel slide" data-bs-ride="carousel">
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
        
        <button className="carousel-control-prev" type="button" data-bs-target="#italyCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#italyCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Layout>
  )
}