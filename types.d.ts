export type MenuItem = {
  label: string;
  href: string;
  subMenu?: MenuItem[];
};

export type Service = {
  title: string;
  description: string;
  image: string;
};

export type Offer = {
  title: string;
  description: string;
  image: string;
};
export type Event = {
  title: string;
  description: string;
  image: string;
  date: string;
};

export type Options = Record<
  "value" | "label" | "price" | "price_vvip" | "price_vip" | "unit",
  string
>;
