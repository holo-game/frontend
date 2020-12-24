import Link from "next/link";
import { useContextualRouting } from "@/lib/contextualRouting";

export default function ContextualLink({
  href,
  as,
  shallow,
  scroll,
  children,
  ...props
}) {
  const { makeContextualHref } = useContextualRouting();
  return (
    <Link href={makeContextualHref(href)} as={as} scroll={scroll} {...props}>
      <a>{children}</a>
    </Link>
  );
}

ContextualLink.defaultProps = {
  shallow: true,
  scroll: false,
};
