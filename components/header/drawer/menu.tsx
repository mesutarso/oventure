
import { MENU } from "@/lib/constants"
import DrawerDropdown from './dropdown'
import DrawerItem from './item'


type Props = {
    setOpen: (open: boolean) => void
}



function Menu({ setOpen }: Props) {
    return (
        <div>
            {
                MENU.map((item:any, index:number) => {
                    if (item.children) {
                        return (
                            <DrawerDropdown key={index} onClick={() => setOpen(false)} label={item.label} href={item.href} subItems={item.children} />
                        )
                    } else {
                        return (
                            <DrawerItem key={index} onClick={() => setOpen(false)} label={item.label} href={item.href} />
                        )
                    }
                })
            }
        </div>
    )
}

export default Menu