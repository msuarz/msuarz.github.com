import Layout from '../../components/Layout'

export default function Spain() {
  const images = [
    {
      title: 'madrid',
      src: '/img/panorama/spain/madrid.jpg',
      href: 'https://www.dropbox.com/s/bqugsohbqrl6kft/madrid.jpg'
    },
    {
      title: 'pico las nieves', 
      src: '/img/panorama/spain/pico_las_nieves.jpg',
      href: 'https://www.dropbox.com/s/sg1xdmmb0ry3v1m/las_nieves.jpg'
    },
    {
      title: 'las palmas',
      src: '/img/panorama/spain/las_palmas.jpg',
      href: 'https://www.dropbox.com/s/rsnvua01ik2wkmg/las_palmas.jpg'
    },
    {
      title: 'acueducto de segovia',
      src: '/img/panorama/spain/acueducto_de_segovia.jpg', 
      href: 'https://www.dropbox.com/s/dp8k9mmee2c8gzh/segovia05.png'
    },
    {
      title: 'alcazar de segovia',
      src: '/img/panorama/spain/alcazar_de_segovia.jpg',
      href: 'https://www.dropbox.com/s/b1s2gcveuezbwr3/segovia.png'
    },
    {
      title: 'segovia',
      src: '/img/panorama/spain/segovia.jpg',
      href: 'https://www.dropbox.com/s/0vl9vakspb1q3vt/segovia09.png'
    }
  ]

  return (
    <Layout title="Spain Photos - msuarz">
      <div id="spainCarousel" className="carousel slide" data-bs-ride="carousel">
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
        
        <button className="carousel-control-prev" type="button" data-bs-target="#spainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#spainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Layout>
  )
}