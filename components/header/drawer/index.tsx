'use client'
import { useState } from 'react'
import { AlignJustify } from 'lucide-react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'
import Logo from '@/components/shared/logo'
import Menu from './menu'



function DrawerMenu() {
    const [open, setOpen] = useState(false)
    return (
        <Drawer direction="left" open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
                <AlignJustify className='text-primary' size={40} />
            </DrawerTrigger>
            <DrawerContent className='min-h-screen'>
                <DrawerHeader>
                    <DrawerTitle className='mb-12'>
                        <Logo />
                    </DrawerTitle>
                    <DrawerDescription className='text-left text-lg'>
                        <div>
                            {/* <SearchBarMobile /> */}
                        </div>
                        <div>  <Menu setOpen={setOpen} /></div>

                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>

                    <DrawerClose>
                        <Button variant="outline">Fermer</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}

export default DrawerMenu