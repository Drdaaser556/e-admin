"use client";

import {
  LogOut,
  Moon,
  Settings,
  Sun,
  User,
  Replace,
  ShoppingBag,
  CircleDollarSign,
  DollarSign,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />
      </div>

      {/* CENTER */}
      <div className="flex-1 flex justify-center">
        <h1 className="text-xl font-bold">
          <Link href="/">
            <h1 className="mr-4 text-2xl font-bold text-muted-foreground">
              Dashboard
            </h1>
          </Link>
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* <Button variant="outline" onClick={toggleSidebar}>
          Custom Button
        </Button> */}
        <Link href="/">
          <Button variant="outline" size="icon">
            <LayoutDashboard className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </Link>
        <Link href="/users/arif">
          <Button variant="outline" size="icon">
            <User className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </Link>
        <Link href="/payments">
          <Button variant="outline" size="icon">
            <DollarSign className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </Link>
        {/* THEME MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/135bfa79-b0f9-4ca9-95ba-b81f8f61c8ab/dhsxvbo-55be135b-4d19-406a-a79f-34e7c7840272.png/v1/fill/w_894,h_894/toon_link_in_my_avatar_style_by_bluetoad_10_dhsxvbo-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzEzNWJmYTc5LWIwZjktNGNhOS05NWJhLWI4MWY4ZjYxYzhhYlwvZGhzeHZiby01NWJlMTM1Yi00ZDE5LTQwNmEtYTc5Zi0zNGU3Yzc4NDAyNzIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FpqAbQIQv3qLMIKR0GbzniJ0jWdeknJwT9bvP0GWFFE" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Replace className="h-[1.2rem] w-[1.2rem] mr-2" />
              Switch Account
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
