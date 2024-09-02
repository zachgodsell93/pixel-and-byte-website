interface OurWork {
  company: string;
  description: string;
  link?: string;
  web: boolean;
  mobile: boolean;
  logo: string;
  images: string[];
}

export const ourWork: OurWork[] = [
  {
    company: "Lay Back and Win",
    description: "Description",
    link: "https://www.laybackandwin.com.au",
    web: true,
    mobile: true,
    logo: "logo.png",
    images: ["image1.png", "image2.png"],
  },
];
