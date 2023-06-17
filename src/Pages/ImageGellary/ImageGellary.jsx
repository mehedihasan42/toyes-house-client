import React, { useEffect, useState } from 'react';

const ImageGellary = () => {


  return (
    <div className='my-10 py-16 mb-8 bg-slate-200'>
      <h2 className='font-bold lg:font-extrabold mb-12 text-xl bg-slate-300 mx-auto w-44 rounded p-4'>Popular Toyes <span className='ml-8'>Pictures</span></h2>
 <div className='flex lg:ml-44 lg:space-x-8'>
  {/* g-1 */}
 <div data-aos="fade-right">
   <img className='w-52 lg:ml-4' src="https://images.unsplash.com/photo-1479740030693-66ad10f3a7b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
   <img className='w-60 lg:ml-8 mt-2' src="https://images.unsplash.com/photo-1550747545-c896b5f89ff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80" alt="" />
   <img className='w-56 lg:ml-8 mt-2' src="https://media.istockphoto.com/id/1391797125/photo/close-up-portrait-of-a-sleeping-cat-on-a-bed-hugging-a-toy.jpg?s=2048x2048&w=is&k=20&c=HHJlF8KXgA9PXs3YQexLjEXWD88g61dtfDE21Is-G70=" alt="" />
   </div>
   {/* g-2 */}
   <div data-aos="fade-left">
   <img className='w-52 lg:ml-4 border-black border-2 border-dashed rounded' src="https://media.istockphoto.com/id/1384207764/vector/cute-teddy-bear-toy-3d-vector-icon-cartoon-minimal-style.jpg?s=2048x2048&w=is&k=20&c=C3QSklIG4NhQdXhl93flWgrCC9KeRJqkMPscyeRoB1I=" alt="" />
   <img className='w-60 lg:ml-8 mt-2' src="https://media.istockphoto.com/id/1296684824/photo/bath-toy.jpg?s=2048x2048&w=is&k=20&c=8gDnvtIKrEUhTOK3612HjoZwCChA5RC59hgNVCPPAaI=" alt="" />
   <img className='w-56 lg:ml-8 mt-2 border-black border-2 border-dashed rounded' src="https://media.istockphoto.com/id/1473138480/vector/cute-ai-robot-for-chat-bot.jpg?s=2048x2048&w=is&k=20&c=TlwvMP5YjTpen7XmlLzJNV2p8Qcj6kMMpop4L--W7s0=" alt="" />
   </div>
   {/* g-3 */}
   <div data-aos="fade-up-right">
   <img className='w-52 lg:ml-4' src="https://media.istockphoto.com/id/1064890694/photo/toy-pig-character-sitting-on-a-white-background-wearing-a-blue-scarf.jpg?s=2048x2048&w=is&k=20&c=uDUv19ou8XkC7nFkDwiPRaxBFyxjC3U-qqoBmcYIl7M=" alt="" />
   <img className='w-60 lg:ml-8 mt-2 border-black border-2 border-dashed rounded' src="https://media.istockphoto.com/id/1177929092/photo/inflatable-duck-yellow-rubber-toy-for-babe-ducky-background.jpg?s=2048x2048&w=is&k=20&c=QZGmw4JlYi4kMXEzpGmcC2tapOggf0ZnCG4aRQa5IXA=" alt="" />
   </div>
   {/* g-4 */}
   <div className='hidden lg:grid' data-aos="zoom-out-left">
   <img className='w-52 lg:ml-4 border-black border-2 border-dashed rounded' src="https://media.istockphoto.com/id/1360012705/vector/pink-dolphin.jpg?s=2048x2048&w=is&k=20&c=qVf5wlH24ih0PX8tdNRapKZqBpyvh-Gw6BzF0anahbE=" alt="" />
   <img className='w-60 lg:ml-8 mt-2 border-black border-2 border-dashed rounded' src="https://media.istockphoto.com/id/592404338/photo/bath-toy-crab-on-white-background.jpg?s=2048x2048&w=is&k=20&c=BW2Sw4NeBQ4R5-MRltKDvh3n5-YlJjEn4ZqrEV34Nak=" alt="" />
   <img className='w-56 lg:ml-8 mt-2' src="https://media.istockphoto.com/id/1408060603/vector/cute-funny-baby-bunny-or-rabbit-dancing-or-jumping.jpg?s=2048x2048&w=is&k=20&c=SOBOUzf01xF3DpuFuSlRIi_UwWUi5Gsw9V4agCR_Rek=" alt="" />
   </div>
 </div>
    </div>

  );
};

export default ImageGellary;