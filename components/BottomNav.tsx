'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { GetAidModal } from './modal/get-aid';

function BottomNav() {
  const [openGetAid, setOpenGetAid] = useState(false);
  return (
    <div className='w-full lg:hidden flex justify-between items-center sticky bottom-0 z-50'>
            <Button
              onClick={() => setOpenGetAid(true)}
              className="flex-1 !bg-app-primary text-white font-medium rounded-lg text-base px-4 !py-6 text-center"
            >
                Get Aid
            </Button>
            <Link
                href="#"
                className="flex-1  bg-[#DB2777] text-white font-medium rounded-lg text-base px-4 py-3 text-center"
            >
                Donate Now
            </Link>
            <GetAidModal open={openGetAid} setOpen={setOpenGetAid} />
    </div>
  )
}

export default BottomNav