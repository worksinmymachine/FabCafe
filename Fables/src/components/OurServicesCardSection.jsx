import React from 'react'
import fablesLeaf from '../assets/fablesLeaf.png'
import campusTales from '../assets/campusTales.png'

const OurServicesCardSection = () => {
    return (
        <div className='bg-[#E1F2F7] min-h-[550px] sm:min-h-[600px] flex justify-center items-center w-full z-20 top-0 start-0'>
            <div className="container pb-6 sm:pb-0 ">
                {/*Header title*/}
                <div className='text-center mb-20'>
                    <h1 className='text-6xl font-bold font-cursive text-customTeal'><span className='text-customBlue font-cursive'>Inception & Journey</span> So Far...</h1>
                </div>
                {/*TimeLine Section*/}
                <div>
                    <div>
                        <ol class="items-center sm:flex">
                            <li class="relative mb-6 sm:mb-0">
                                <div class="flex items-center">
                                    <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-customBlue dark:bg-blue-900 sm:ring-2 dark:ring-gray-900 shrink-0">
                                        <img src={fablesLeaf} className='w-8 h-8'></img>
                                    </div>
                                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div class="mt-3 sm:pe-8">
                                    <h3 class="text-lg font-semibold text-customBlue dark:text-white">Fables Cafe</h3>
                                    <time class="block mb-2 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">2022</time>
                                    <p class="text-base font-normal text-customBlue dark:text-gray-400">
                                        <ul style={{ listStyleType: 'circle' }}>
                                            <li>Community Centric</li>
                                            <li>Atmosphere</li>
                                            <li>Comforting snacks with a modern twist</li>
                                            <li>Authentic bean-to-cup brews! </li>
                                            <li>Building a modern day 'Chaupal' </li>
                                        </ul>
                                    </p>
                                </div>
                            </li>
                            <li class="relative mb-6 sm:mb-0">
                                <div class="flex items-center">
                                    <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-customTeal dark:bg-blue-900 sm:ring-2 dark:ring-gray-900 shrink-0">
                                        <img src={fablesLeaf} className='w-8 h-8'></img>
                                    </div>
                                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div class="mt-3 sm:pe-8">
                                    <h3 class="text-lg font-semibold text-customTeal dark:text-white">Bake Stories</h3>
                                    <time class="block mb-2 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">2023</time>
                                    <p class="text-base font-normal text-customTeal dark:text-gray-400">
                                    <ul style={{ listStyleType: 'circle' }}>
                                            <li>Decadent Desserts</li>
                                            <li>Customized cakes for every ocassion</li>
                                            <li>Handcrafted cookies & chocolates</li>
                                            <li>Fresh daily made Pastries ! </li>
                                            <li>Scrumptious Breakfast !</li>
                                        </ul>
                                    </p>
                                </div>
                            </li>
                            <li class="relative mb-6 sm:mb-0">
                                <div class="flex items-center">
                                    <div class="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-[#ff0000] dark:bg-blue-900 sm:ring-2 dark:ring-gray-900 shrink-0">
                                        <img src={campusTales} className='w-8 h-8'></img>
                                    </div>
                                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div class="mt-3 sm:pe-8">
                                    <h3 class="text-lg font-semibold text-[#FF0000] dark:text-white">Campus Tales</h3>
                                    <time class="block mb-2 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">2024</time>
                                    <p class="text-base f text-[#FF0000] dark:text-gray-400">
                                    <ul style={{ listStyleType: 'circle' }}>
                                            <li>A hub for wellness and connection</li>
                                            <li>Royal breakfast platters</li>
                                            <li>Tasty Salads!</li>
                                            <li>Mealbox subscriptions!</li>
                                            <li>Snacks & Desserts all day !</li>
                                        </ul>
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServicesCardSection