import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
  } from "../components/ui/dialog"
import Image from 'next/image';
import { cn } from '../lib/utils';
import { Button } from './ui/button'; 
interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    instantMeeting?: boolean;
    image?: string|React.ReactNode;
    buttonIcon?: React.ReactNode;
  }
  
const MeetingModal = ({isOpen,
    onClose,
    title,
    className,
    children,
    handleClick,
    buttonText,
    instantMeeting,
    image,
    buttonIcon}:MeetingModalProps) => {
  return (
    <div>
     <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className='flex w-fyll max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-10 text-white' >
   <div className='flex flex-col gap-6'>
    {image&& (
        <div className='flex justify-center'>
         {typeof(image) == 'string'  ? <Image src={image} alt='img' width={72} height={72} /> : image}
            
        </div>
    )}
    <h1 className={cn('text-3xl font-bold leading-[42px]',className)} >{title}</h1>
    {children}
    <Button className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0' onClick={handleClick}>
        {buttonIcon && <span className='mr-2'>{buttonIcon}</span>
    }
        
        {buttonText || 'Schedule Meeting'}</Button>
   </div>
  </DialogContent>                
</Dialog>

    </div>
  )
}

export default MeetingModal
