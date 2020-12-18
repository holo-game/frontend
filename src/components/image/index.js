import { API_URI } from "@/constants";

export default function Image({ src, alt, ...props }) {
  const merged_src = API_URI + src;
  return <img src={merged_src} alt={alt} {...props} />;
}
