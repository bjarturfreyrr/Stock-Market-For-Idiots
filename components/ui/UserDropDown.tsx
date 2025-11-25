"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import {Button} from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserDropDown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push("/sign-in");
  }

  const user = {  name: "Chad", email:"contact@chadgrooming.is"};

  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:yellow-500">
    <Avatar className="h-9 w-9">
        <AvatarImage src="https://chadgrooming.is/cdn/shop/files/logo_light_blue.png?v=1749665108&width=500" />
        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
          {user.name[0]}
        </AvatarFallback>
    </Avatar>
    <div className="hidden md:flex flex-col items-start">
      <span className="text-base font-medium text-gray-400">
        {user.name}
      </span>
    </div>

    </Button>    
  </DropdownMenuTrigger>
  <DropdownMenuContent className="text-gray-400">
    <div className="flex relative items-center gap-3 py-2">
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://chadgrooming.is/cdn/shop/files/logo_light_blue.png?v=1749665108&width=500" />
        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
          {user.name[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-base font-medium text-gray-400">
          {user.name}
        </span>
        <span className="text-sm text-gray-500">
            {user.email}
        </span>
      </div>
    </div>
    
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserDropDown