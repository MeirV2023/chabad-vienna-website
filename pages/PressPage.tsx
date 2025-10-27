import React from 'react';

const PressPage: React.FC = () => {
  const pressArticles = [
    {
      id: 1,
      publication: 'New York Dining Magazine',
      title: 'RC Hospitality Redefines Luxury Steakhouse Experience',
      date: 'October 2023',
      excerpt: 'A deep dive into the culinary excellence and impeccable service at the new Broad Street location...',
      image: 'https://picsum.photos/seed/press1/800/600'
    },
    {
      id: 2,
      publication: 'Forbes',
      title: 'The Art of Ambiance: How RC Hospitality Crafts Unforgettable Spaces',
      date: 'September 2023',
      excerpt: 'From custom lighting to curated art, no detail is too small for this leading hospitality group...',
      image: 'https://picsum.photos/seed/press2/800/600'
    },
    {
      id: 3,
      publication: 'Vogue Living',
      title: 'A Night at Park Avenue: Where Classic Elegance Meets Modern Cuisine',
      date: 'August 2023',
      excerpt: 'We review the iconic Park Avenue establishment and its new seasonal menu...',
      image: 'https://picsum.photos/seed/press3/800/600'
    }
  ];

  return (
    <div className="bg-[#f4f4f4] text-gray-800 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-5xl md:text-6xl mb-4 tracking-widest uppercase">Press</h1>
        <div className="w-24 h-px bg-[#8c2b2b] mx-auto mb-16"></div>

        <div className="space-y-12 text-left">
          {pressArticles.map(article => (
            <div key={article.id} className="md:flex gap-8 group">
              <div className="md:w-1/3 overflow-hidden mb-4 md:mb-0">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="md:w-2/3">
                <p className="text-sm text-gray-500 tracking-wider uppercase">{article.publication} &bull; {article.date}</p>
                <h2 className="font-display text-3xl my-2 text-gray-900 group-hover:text-[#8c2b2b] transition-colors">{article.title}</h2>
                <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                <a href="#" className="inline-block mt-4 text-[#8c2b2b] font-semibold tracking-wider text-sm hover:underline">READ MORE &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressPage;
