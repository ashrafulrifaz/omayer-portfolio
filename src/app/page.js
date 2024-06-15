import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home_page">
      <div className="max-w-[1300px] mx-auto p-12 pb-6 hidden lg:block">
        <div className="grid grid-cols-4 gap-7">
          <div className="card col-span-2">
            <div className="card_container !p-6">
              <h2 className="text-4xl font-bold leading-snug">Hey There, <br/> I am Ehasanul  Islam <br/> A Proffesional Video Editor</h2>
              <p className="font-medium text-lg text-second mt-4 leading-relaxed">Step into this exciting journey with me, Ehasanul Islam Omayer, your trusted assistant.</p>
            </div>
          </div>
          <div className="space-y-8 col-span-2">
            <div className="flex gap-7">
              <div className="card_container !p-3 flex gap-5">
                <Link href="#">
                  <svg className="!text-second hover:!text-[#1877f2] cursor-pointer transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
                </Link>
                <Link href="#">
                  <svg className="!text-second hover:!text-[#fd004b] cursor-pointer transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Link>
                <Link href="#">
                  <svg className="!text-second hover:!text-black cursor-pointer transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Link>
                <Link href="#">
                  <svg className="!text-second hover:!text-[#0a66c2] cursor-pointer transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="card_container !p-3 flex gap-5">
                <Popover>
                  <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                    <svg className="!text-second hover:!text-primary cursor-pointer transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                      <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                  </PopoverButton>
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      anchor="bottom"
                      className="divide-y divide-white/5 !bg-background rounded-xl bg-white/5 text-sm/6 [--anchor-gap:var(--spacing-5)] z-10"
                    >
                      <div className="p-3 border-2 border-primary rounded-xl">
                        <h4 className="text-black">+880 01643876985</h4>
                      </div>
                    </PopoverPanel>
                  </Transition>
                </Popover>
                <Popover>
                  <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                    <svg className="!text-second hover:!text-primary cursor-pointer transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#1877f2" fill="none">
                      <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                      <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                  </PopoverButton>
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      anchor="bottom"
                      className="divide-y divide-white/5 !bg-background rounded-xl bg-white/5 text-sm/6 [--anchor-gap:var(--spacing-5)] z-10"
                    >
                      <div className="p-3 border-2 border-primary rounded-xl">
                        <h4 className="text-black">mdomayer2002@gmail.com</h4>
                      </div>
                    </PopoverPanel>
                  </Transition>
                </Popover>
              </div>
              <button className="py-2 px-5 rounded-xl bg-primary text-lg font-semibold ">Buy Me a Coffee</button>
            </div>
            <div className="grid grid-cols-2 gap-7">
              <Link href="my-skills" className="card">
                <div className="card_container">
                  <h2 className="text-2xl font-semibold leading-snug">My Skills</h2>
                  <p className="mt-3 text-md text-second font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                  <button className="transition-all flex gap-1 items-center font-medium text-md mt-2.5">
                    <span>Know More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4B4B4B" fill="none">
                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                  </button>
                </div>
              </Link>
              <Link href="recent-works" className="card">
                <div className="card_container">
                  <h2 className="text-2xl font-semibold leading-snug">Recent Works</h2>
                  <p className="mt-3 text-md text-second font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                  <button className="transition-all flex gap-1 items-center font-medium text-md mt-2.5">
                    <span>Know More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4B4B4B" fill="none">
                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7 mt-7">
          <Link href="about-me" className="card">
            <div className="card_container">
              <h2 className="text-2xl font-semibold leading-snug">About Me</h2>
              <p className="mt-3 text-md text-second font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              <button className="transition-all flex gap-1 items-center font-medium text-md mt-2.5">
                <span>Know More</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4B4B4B" fill="none">
                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </Link>
          <Link href="my-services" className="card">
            <div className="card_container">
              <h2 className="text-2xl font-semibold leading-snug">My Services</h2>
              <p className="mt-3 text-md text-second font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              <button className="transition-all flex gap-1 items-center font-medium text-md mt-2.5">
                <span>Know More</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4B4B4B" fill="none">
                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </Link>
          <Link href="client-reviews" className="card">
            <div className="card_container">
              <h2 className="text-2xl font-semibold leading-snug">Client Reviews</h2>
              <p className="mt-3 text-md text-second font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              <button className="transition-all flex gap-1 items-center font-medium text-md mt-2.5">
                <span>Know More</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4B4B4B" fill="none">
                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </Link>
          <Link href="contact-me" className="card">
            <div className="card_container">
              <h2 className="text-2xl font-semibold leading-snug">Contact Me</h2>
              <p className="mt-3 text-md text-second font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              <button className="transition-all flex gap-1 items-center font-medium text-md mt-2.5">
                <span>Know More</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4B4B4B" fill="none">
                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </Link>
        </div>
        <p className="mt-5 text-end font-medium text-md">Developed by <Link href="https://brainnect.com" className="font-semibold underline" target="_blank">brainnect</Link></p>
      </div>
      <div className="flex items-center h-screen justify-center max-w-[90%] mx-auto">
        <h2 className="text-2xl font-semibold text-center">This website is only for desktop</h2>
      </div>
    </div>
  );
}
