export interface SubCollectionType {
  id: number;
  label: string;
  path: string;
}

export interface Product {
   id : number;
  label?: string;
  discount?: string;
  category : string;
  slug : string;
  title : string;
  currentPrice?: number;
  oldPrice?: number;
  img1 : string;
  img2 : string;
}

export interface CollectionItem {
  label: string;
  path?: string;
  icon?: boolean;
  subCollection?: SubCollectionType[];
}

export interface SliderState {
  menuBar: boolean;
  AccToggle: boolean;
  colectionToggle: boolean;
  search: boolean;
  subCollection: string;
  popup : boolean
}

export interface RootState {
  slider: SliderState;
  filter: {
    open: boolean;
    sections: {
      sortBy: boolean;
      price: boolean;
      size: boolean;
    };
  };
  cart: {
    cartItems: CartItem[];
  };
}


 

export interface CartItem extends Product {
  quantity: number;
}
