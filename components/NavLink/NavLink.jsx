import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ href, activeClass, children, exact, classes, ...elseProps }) {
  const router  = useRouter();
  const isActive = exact
    ? router.asPath === href
    : router.asPath.startsWith(href) || router.asPath.endsWith(href);

  if (isActive) {
    classes += ` ${activeClass}`;
  }

  return (
    <Link href={href}>
      <a {...elseProps} className={classes}>
        {children}
      </a>
    </Link>
  );
}
