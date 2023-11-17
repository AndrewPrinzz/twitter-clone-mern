import Image from "next/image";

type SidebarItemProps = {
  image: string;
  children: React.ReactNode
}

function SidebarItem({image, children}: SidebarItemProps) {
  return (
    <div className="flex items-center p-3 cursor-pointer">
      <div className="mr-2">
        <Image className="w-auto h-auto" width={26} height={26} src={image} alt="" />
      </div>
      <div className="text-xl font-bold">
        {children}
      </div>
    </div> 
  )
}

export {SidebarItem}