
import { MENU } from "@/lib/constants"
import DrawerDropdown from './dropdown'
import DrawerItem from './item'


type Props = {
    setOpen: (open: boolean) => void
}



function Menu({ setOpen }: Props) {
    return (
        <div className="space-y-4">
            {
                MENU.map((item: any, index: number) => {
                    if (item.subMenu) {
                        return (
                            <DrawerDropdown key={index} onClick={() => setOpen(false)} label={item.label} href={item.href} subMenu={item.subMenu} />
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