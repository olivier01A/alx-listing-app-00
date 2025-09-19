// interf
aces/index.ts

export interface PropertyProps {
  id: number;
  name: string;
  address: string;
  rating: number;
  category: string;
  price: string;
  offers: string[];
  imageUrl: string;
}




*Explanation:

id: number – unique identifier for each property.

name: string – the property’s name.

address: string – full address.

rating: number – numeric rating (e.g., 4.5).

category: string – property type/category (e.g., "Luxury Apartment").

price: string – formatted price (e.g., "$250/night").

offers: string[] – list of offers or highlights.

imageUrl: string – image path or URL.



