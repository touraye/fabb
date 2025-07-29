import { StaticImageData } from "next/image";

export type ProjectProps = {
    id: number;
    heading: string;
    img?: StaticImageData; // from next/image
    images?: StaticImageData[];
    description: string[];
    category: 'Quality Education' | 'Quality Healthcare' | 'Advocacy and Empowerment' | 'Infrastructure Development' | 'Others';
}