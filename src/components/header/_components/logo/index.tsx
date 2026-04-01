import Link from "next/link"
import SiteLogo from "@svg/logo"
import s from "./styles.module.css"

export default function Logo({ showText = true }) {
  return (
    <>
      <Link href="/" className={s.navbarBrand}>
        <SiteLogo />
        {showText && <p className={s.logoText}>Andy Chapman</p>}
      </Link>
      <svg className="feather-icon" width="26" height="26">
        <use href="../feather-sprite.svg#thumbs-up" />
      </svg>
    </>
  )
}
