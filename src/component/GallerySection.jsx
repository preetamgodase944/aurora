import React, { useRef, useState } from 'react';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

// YOUR 15 ITEMS (1 Video + 14 Images)
const galleryData = [

    { id: 1, type: 'image', title: '', category: '', src: '/gallery/first.webp' },
    { id: 2, type: 'image', title: '', category: '', src: '/gallery/second.webp' },
     { id: 3, type: 'image', title: '', category: '', src: '/gallery/third.webp' },
    { id: 4, type: 'image', title: '', category: '', src: '/gallery/fourth.webp' },
     { id: 5, type: 'image', title: '', category: '', src: '/gallery/fifth.webp' },
    { id: 6, type: 'image', title: '', category: '', src: '/gallery/sixth.webp' },
     { id: 7, type: 'image', title: '', category: '', src: '/gallery/seventh.webp' },
    { id: 8, type: 'image', title: '', category: '', src: '/gallery/eight.webp' },
    // { id: 3, type: 'image', title: '', category: '', src: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=600' },
    // { id: 4, type: 'image', title: '', category: '', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600' },
    // { id: 5, type: 'image', title: ' ', category: '', src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600' },
    // { id: 6, type: 'image', title: ' ', category: '', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600' },
    // { id: 7, type: 'image', title: ' ', category: '', src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600' },
    // {
    //     id: 1,
    //     type: 'video',
    //     title: 'Facility Walkthrough',
    //     category: 'Virtual Tour',
    //     src: 'path/to/video.mp4',
    //     thumbnail: 'path/to/thumbnail.jpg'
    // },
    // { id: 8, type: 'image', title: ' ', category: 'Industrial', src: 'https://images.unsplash.com/photo-1531297461136-82lw8e3h9e.jpg?w=600' },
    // { id: 9, type: 'image', title: ' Pep', category: 'Pretreatment', src: 'https://images.unsplash.com/photo-1581093458791-9f302245a8bb?w=600' },
    // { id: 10, type: 'image', title: ' ', category: 'Production', src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600' },
    // { id: 11, type: 'image', title: ' ', category: 'Finished Goods', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600' },
    // { id: 12, type: 'image', title: ' ', category: 'Infrastructure', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600' },
    // { id: 13, type: 'image', title: ' ', category: 'Quality', src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600' },
    // { id: 14, type: 'image', title: '', category: 'Logistics', src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600' },
    // { id: 15, type: 'image', title: '  ', category: 'Personnel', src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600' },
];

const GallerySection = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = direction === 'left' ? -324 : 324;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Close modal logic
    const closeLightBox = () => setSelectedItem(null);

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">

                {/* Header */}
                <div className="gallery-header-row">
                    <div className="gallery-text-content">
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Aurora Gallery</h2>
                        <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
                            Swipe to explore our facility and projects
                        </p>
                    </div>

                    <div className="gallery-controls">
                        <button onClick={() => scroll('left')} className="gallery-btn">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={() => scroll('right')} className="gallery-btn">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Scroll Container */}
                <div className="gallery-scroll-container" ref={scrollRef}>
                    {galleryData.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item"
                            onClick={() => setSelectedItem(item)} /* CLICK HANDLER ADDED HERE */
                        >

                            {/* VIDEO PREVIEW */}
                            {item.type === 'video' ? (
                                <div className="video-wrapper">
                                    {/* Note: We use a div to overlay the video so the click registers 
                       on the card, not the video controls */}
                                    <div className="video-click-overlay"></div>
                                    <video
                                        className="gallery-video"
                                        muted
                                        poster={item.thumbnail}
                                    >
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                    <div className="video-badge">
                                        <Play size={14} fill="white" /> Video
                                    </div>
                                </div>
                            ) : (
                                /* IMAGE PREVIEW */
                                <>
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="gallery-image"
                                        loading="lazy"
                                    />
                                    <div className="gallery-overlay">
                                        <span className="gallery-category">{item.category}</span>
                                        <h3 className="gallery-title">{item.title}</h3>
                                        <p className="gallery-click-hint">Click to expand</p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* --- LIGHTBOX MODAL --- */}
            {selectedItem && (
                <div className="lightbox-overlay" onClick={closeLightBox}>
                    <button className="lightbox-close" onClick={closeLightBox}>
                        <X size={32} />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        {selectedItem.type === 'video' ? (
                            <video controls autoPlay className="lightbox-media">
                                <source src={selectedItem.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img
                                src={selectedItem.src.replace('w=600', 'w=1200')} /* Try to load higher res if using unsplash logic */
                                alt={selectedItem.title}
                                className="lightbox-media"
                            />
                        )}

                        {/* <div className="lightbox-info">
                            <span className="lightbox-category">{selectedItem.category}</span>
                            <h3 className="lightbox-title">{selectedItem.title}</h3>
                        </div> */}
                    </div>
                </div>
            )}

        </section>
    );
};

export default GallerySection;