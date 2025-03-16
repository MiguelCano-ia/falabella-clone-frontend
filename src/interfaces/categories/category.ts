export type Subcategory = {
  name: string;
  items: string[];
};

export type Category = {
  name: string;
  svg: string;
  subcategories: Subcategory[];
};
