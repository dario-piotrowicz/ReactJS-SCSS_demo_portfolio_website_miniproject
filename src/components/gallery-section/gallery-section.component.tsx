import React, { FunctionComponent } from 'react';
import './gallery-section.styles.scss';

interface GalleryItemParams {
  imgSrc: string;
  title: string;
  category: string;
}

const GalleryItem: FunctionComponent<GalleryItemParams> = ({
  imgSrc,
  title,
  category,
}) => {
  return (
    <div className="gallery-item">
      <div className="image">
        <img src={imgSrc} alt={`image of "${title}"`} />
      </div>
      <div className="text">
        <div className="text-wrap">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

const galleryItems: GalleryItemParams[] = [
  {
    imgSrc: 'images/gallery/item1.png',
    title: 'Great Gradients',
    category: 'Design',
  },
  {
    imgSrc: 'images/gallery/item2.png',
    title: 'World Experience',
    category: 'UX/UI',
  },
  {
    imgSrc: 'images/gallery/item3.png',
    title: 'Vanishing',
    category: 'Design',
  },
  {
    imgSrc: 'images/gallery/item4.png',
    title: 'Gap Inc',
    category: 'Design',
  },
  {
    imgSrc: 'images/gallery/item5.png',
    title: 'Face The Experience',
    category: 'Mobile UI Design',
  },
  {
    imgSrc: 'images/gallery/item6.png',
    title: 'Bezier Curves',
    category: 'Design Concept',
  },
  {
    imgSrc: 'images/gallery/item7.png',
    title: 'Dock Ponder',
    category: 'Design',
  },
  {
    imgSrc: 'images/gallery/item8.png',
    title: 'Resturant App',
    category: 'Web Application',
  },
  {
    imgSrc: 'images/gallery/item9.png',
    title: 'FriendFeed',
    category: 'Social Network Concept',
  },
];

const GallerySection: FunctionComponent = () => {
  return (
    <section id="gallery">
      <div className="centering-container">
        <h2>My Work</h2>
        <div className="bottom-line" />
        <p className="intro-text">Check out some of my projects</p>
        <div className="content">
          {galleryItems.map((item, idx) => (
            <GalleryItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
