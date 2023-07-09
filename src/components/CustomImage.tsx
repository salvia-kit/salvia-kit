import NextImage from 'next/image';
import style from './custom-image.module.css';

interface ImageProps {
  className?: string;
  alt: string;
  src: string | any;
  width?: number;
  height?: number;
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
      placeholder="blur"
      className={`${className} ${style.img}`}
    />
  </div>
);

export default CustomImage;
