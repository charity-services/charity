import React from 'react'
import { Link } from 'react-router-dom'
function Section() {
    return (
        <div>
            <section>
            <div className="text-center ">
    <h3 className="text-3xl sm:text-4xl uppercase leading-normal font-extrabold tracking-tight text-gray-900">
      Who we are
    </h3>
  </div>
                <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div class="relative z-10 lg:py-16">
                            <div class="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="House"
                                    src="https://images.pexels.com/photos/7469221/pexels-photo-7469221.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    class="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div class="relative flex items-center bg-gray-100">
                            <span
                                class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div class="p-8 sm:p-16 lg:p-24">
                                <h2 class="text-2xl font-bold sm:text-3xl">
                                    Animal care is the practice of nurturing and safeguarding the health, happiness, and welfare of animals.
                                </h2>

                                <p class="mt-4 text-gray-600">
                                    Animal care is of paramount importance as it ensures the physical and emotional well-being of animals, promoting their quality of life and longevity. It helps prevent diseases, injuries, and neglect, reducing suffering and promoting a compassionate society. Adequate animal care also contributes to environmental sustainability by preserving biodiversity and ecological balance. Furthermore, it cultivates empathy, compassion, and respect for all living beings, fostering a harmonious relationship between humans and animals. Ultimately, prioritizing animal care is essential for creating a more humane and ethical world.
                                </p>

                                <Link
                                    to="/ContactUs"
                                    class="mt-8 inline-block rounded border  bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none  "
                                    style={{ backgroundColor: "#219D80" }}
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section