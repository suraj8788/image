import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Api from './Api';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://via.placeholder.com/600/92c952',
    title: 'Breakfast',
  },
  {
    img: 'https://via.placeholder.com/600/771796',
    title: 'Burger',
  },
  {
    img: "https://via.placeholder.com/600/24f355",
    title: 'Camera',
  },
  {
    img: "https://via.placeholder.com/600/d32776",
    title: 'Coffee',
  },
  {
    img: "https://via.placeholder.com/600/f66b97",
    title: 'Hats',
  },
  {
    img: "https://via.placeholder.com/600/56a8c2",
    title: 'Honey',
  },
  {
    img: "https://via.placeholder.com/600/b0f7cc",
    title: 'Basketball',
  },
  {
    img: "https://via.placeholder.com/600/54176f",
    title: 'Fern',
  },
  {
    img: "https://via.placeholder.com/600/51aa97",
    title: 'Mushrooms',
  },
  {
    img: "https://via.placeholder.com/600/810b14",
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
