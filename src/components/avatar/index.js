import cn from "classnames";
import { Image } from "../";

export default function Avatar({ src, size, className }) {
  return (
    <div
      className={cn("avatar", size && `avatar-${size}`, className && className)}
    >
      <Image src={src} />
    </div>
  );
}
