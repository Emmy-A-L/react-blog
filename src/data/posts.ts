// Blog post data with real Unsplash images and basic fields
export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Sunset Over the Mountains",
    content:
      "Experience the breathtaking view as the sun sets behind the tall, snowy mountains, casting a golden glow over the landscape.",
    author: "Jane Doe",
    date: "2025-05-12",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    slug: "sunset-over-the-mountains",
  },
  {
    id: 2,
    title: "City Life Colors",
    content:
      "Explore the vibrant life of the city with its colorful high-rise buildings and bustling streets.",
    author: "John Smith",
    date: "2025-05-10",
    imageUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    slug: "city-life-colors",
  },
  {
    id: 3,
    title: "Nature's Beauty: The Pink Peony",
    content:
      "A close look at a beautiful pink peony blooming in the garden, symbolizing grace and romance.",
    author: "Emily Rose",
    date: "2025-05-08",
    imageUrl:
      "https://images.unsplash.com/photo-1694701893000-75354ebc6cd4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "natures-beauty-the-pink-peony",
  },
  {
    id: 4,
    title: "Adventures at Sea",
    content:
      "A woman gazes out at the endless ocean from a ferry, dreaming of new adventures and distant shores.",
    author: "Alex Turner",
    date: "2025-05-05",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    slug: "adventures-at-sea",
  },
  {
    id: 5,
    title: "Urban Transport: The Orange Tram",
    content:
      "A bright orange tram parked on the street, ready to take passengers on a journey through the city.",
    author: "Chris Lane",
    date: "2025-05-01",
    imageUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    slug: "urban-transport-the-orange-tram",
  },
];
