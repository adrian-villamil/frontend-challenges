export type Stay = {
  id:          number;
  title:       string;
  description: string;
  price:       number;
  rating:      number;
  superhost:   boolean;
  location:    string;
  capacity:    Capacity;
  image:       string;
};

export type Capacity = {
  people:  number;
  bedroom: number;
};
