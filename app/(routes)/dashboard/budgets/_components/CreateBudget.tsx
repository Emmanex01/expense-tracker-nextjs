'use client'
import React, { useState } from 'react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';


const CreateBudget = () => {
  const [emojiIcon, setEmojiIcon] = useState('😀');
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState()
  const [amount, setAmount] = useState()

  return (
    <div>
      
      <Dialog>
      <DialogTrigger>
        <div className='grid grid-cols-1 justify-items-center items-center gap-3 bg-slate-200 py-4 w-48 mt-2 shadow-md'>
          <div className='font-medium'>+</div>
          <h1>Create New Budget</h1>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a Budget</DialogTitle>
          <DialogDescription>
          <div>
            <Button 
              variant='outline'
              onClick={() => {
                setOpenEmojiPicker(!openEmojiPicker)
              }}
            >
              {emojiIcon}
            </Button>
            <div className=''>
              <EmojiPicker 
                className='absolute'
                open={openEmojiPicker}
                onEmojiClick={(e:EmojiClickData) => {
                  setEmojiIcon(e.emoji)
                }}
              />
            </div>
            <div className='my-3'>
              <h2 className='font-semibold text-black'>Budget name</h2>
              <input type="text" value={name} className='w-full' placeholder='e.g Traveling...'/>
            </div>
            <div>
              <h2 className='font-semibold text-black'>Amount</h2>
              <input 
                type="text" 
                value={amount} 
                className='w-full' 
                placeholder='$0000'
                onChange={(e) => {
                  setAmount(e)
                }}
              />
            </div>
            <Button 
              className='my-3'
              
            >
              Create Budget
            </Button>
          </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

    </div>
  )
}

export default CreateBudget
