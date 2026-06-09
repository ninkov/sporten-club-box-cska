import { useCallback, useEffect, useState } from 'react'
import trainingImage1 from '../assets/gallery-training1.jpg'
import trainingImage2 from '../assets/gallery-training2.jpg'
import trainingImage3 from '../assets/gallery-training3.jpg'
import trainingImage4 from '../assets/gallery-training4.jpg'

const galleryItems = [
  {
    title: 'Тренировки',
    description: 'Кадри от подготовката и спарингите в залата.',
    images: [
      { src: trainingImage1, alt: 'Спаринг тренировка в залата на Спортен клуб бокс ЦСКА' },
      { src: trainingImage2, alt: 'Тренировка по бокс в СК Бокс ЦСКА' },
      { src: trainingImage3, alt: 'Боксьори по време на подготовка' },
      { src: trainingImage4, alt: 'Спаринг тренировка в залата на Спортен клуб бокс ЦСКА' },
    ],
  },
  {
    title: 'Състезания',
    description: 'Снимки от турнири и официални срещи.',
    images: [],
  },
  {
    title: 'Зала',
    description: 'Пространството, рингът и тренировъчната среда.',
    images: [],
  },
  {
    title: 'Отбор',
    description: 'Треньори, състезатели и клубни моменти.',
    images: [],
  },
]

function GallerySection() {
  const [activeGallery, setActiveGallery] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  const openGallery = (gallery) => {
    setActiveGallery(gallery)
    setActiveImageIndex(0)
  }

  const closeGallery = useCallback(() => {
    setActiveGallery(null)
    setActiveImageIndex(0)
  }, [])

  const showPreviousImage = useCallback(() => {
    if (!activeGallery?.images.length) {
      return
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? activeGallery.images.length - 1 : currentIndex - 1,
    )
  }, [activeGallery])

  const showNextImage = useCallback(() => {
    if (!activeGallery?.images.length) {
      return
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === activeGallery.images.length - 1 ? 0 : currentIndex + 1,
    )
  }, [activeGallery])

  const handleTouchEnd = (event) => {
    if (touchStartX === null) {
      return
    }

    const touchEndX = event.changedTouches[0].clientX
    const swipeDistance = touchStartX - touchEndX

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        showNextImage()
      } else {
        showPreviousImage()
      }
    }

    setTouchStartX(null)
  }

  useEffect(() => {
    if (!activeGallery) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeGallery()
        return
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage()
        return
      }

      if (event.key === 'ArrowRight') {
        showNextImage()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeGallery, closeGallery, showNextImage, showPreviousImage])

  const activeImage = activeGallery?.images[activeImageIndex]

  return (
    <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">Галерия</p>
        <h2 id="gallery-title">Снимки от клуба по категории.</h2>
        <p>
          Избери категория, за да разгледаш снимки от тренировки, състезания,
          залата и отбора.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <button
            className={item.images.length ? 'gallery-item has-images' : 'gallery-item'}
            key={item.title}
            type="button"
            onClick={() => item.images.length && openGallery(item)}
          >
            {item.images[0] && <img src={item.images[0].src} alt="" />}
            <span>{item.title}</span>
            <small>{item.description}</small>
            {!item.images.length && <em>Очаквайте снимки</em>}
          </button>
        ))}
      </div>
      {activeGallery && (
        <div className="gallery-modal" role="dialog" aria-modal="true" aria-labelledby="gallery-modal-title">
          <button
            className="gallery-modal-backdrop"
            type="button"
            aria-label="Затвори галерията"
            onClick={closeGallery}
          ></button>
          <div className="gallery-modal-content">
            <button
              className="gallery-modal-close"
              type="button"
              aria-label="Затвори галерията"
              onClick={closeGallery}
            >
              ×
            </button>
            <h3 id="gallery-modal-title">{activeGallery.title}</h3>
            <div
              className="gallery-viewer"
              onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
              onTouchEnd={handleTouchEnd}
            >
              <button
                className="gallery-arrow gallery-arrow-prev"
                type="button"
                aria-label="Предишна снимка"
                onClick={showPreviousImage}
              >
                ‹
              </button>
              <figure className="gallery-active-image">
                <img src={activeImage.src} alt={activeImage.alt} />
              </figure>
              <button
                className="gallery-arrow gallery-arrow-next"
                type="button"
                aria-label="Следваща снимка"
                onClick={showNextImage}
              >
                ›
              </button>
            </div>
            <div className="gallery-thumbnails" aria-label="Снимки в галерията">
              {activeGallery.images.map((image, index) => (
                <button
                  className={index === activeImageIndex ? 'gallery-thumb is-active' : 'gallery-thumb'}
                  key={image.src}
                  type="button"
                  aria-label={`Покажи снимка ${index + 1}`}
                  aria-current={index === activeImageIndex}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image.src} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection
