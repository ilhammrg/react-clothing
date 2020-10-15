const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://e-commerce-db-27f12.web.app/images/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://e-commerce-db-27f12.web.app/images/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://e-commerce-db-27f12.web.app/images/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://e-commerce-db-27f12.web.app/images/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://e-commerce-db-27f12.web.app/images/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
