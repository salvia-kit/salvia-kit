import style from './image.module.css';
import NextImage from 'next/image';

export interface ImageProps {
  className?: string;
  alt: any;
  src: string | any;
  width: number;
  height: number;
}

const CustomImage = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}: ImageProps) => (
  <div className={style.imgContainer}>
    <NextImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      {...props}
      className={`${className} ${style.img}`}
    />
  </div>
);

export default CustomImage;
