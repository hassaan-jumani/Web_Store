import { StaticImageData } from "next/image"

export type Product={
    id:number;
    name:string;
    price:number;
    tagline:string,
    category:string;
    // image:string | StaticImageData;
    image:string;
}