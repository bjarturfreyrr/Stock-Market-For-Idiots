import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/ui/NavItems";
import UserDropDown from "@/components/ui/UserDropDown"

const header = () => {
  return (
    <header className="sticky top-0 header">
        <div className="container header-wrapper">
            <Link href="/">
                <img src="/public/assets/icons/logo.svg" alt="StockMarket logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
            </Link>
            <nav className="hidden sm:block">
                <NavItems />
            </nav>
            <UserDropDown />
        </div>
    </header>
  )
}

export default header