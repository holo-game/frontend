import Link from "next/link";
import { useContextualRouting } from "@/lib/contextualRouting";

export default function ContextualLink({
  href,
  as,
  shallow,
  children,
  ...props
}) {
  const { makeContextualHref } = useContextualRouting();
  return (
    <Link href={makeContextualHref(href)} as={as} {...props}>
      <a>{children}</a>
    </Link>
  );
}

ContextualLink.defaultProps = {
  shallow: true,
};
