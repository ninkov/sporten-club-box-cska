const galleryItems = ['Тренировки', 'Състезания', 'Зала', 'Отбор']

function GallerySection() {
  return (
    <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">Галерия</p>
        <h2 id="gallery-title">Място за снимки от клуба.</h2>
        <p>
          Добавени са базови placeholders. Когато има реални снимки, ще ги заменим с
          изображения от тренировки, турнири и събития.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article className="gallery-item" key={item}>
            <span>{item}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
