<template>

  <nav :class="navClass" :style="{ position, top, left, right, zIndex, }">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          
          <!-- Hamburger button for mobile view -->
          <button
            class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <!-- Hamburger icon -->
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7">
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </button>
      
          <!-- Collapsible navigation container -->
          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item>
            <!-- Logo -->
            <a
              class="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#">
              <img
                src="https://i.postimg.cc/x1zVz8cX/Screenshot-2023-09-27-152958-removebg-preview.png"
                style="height: 40px"
                alt="TE Logo"
                loading="lazy" />
            </a>
            <!-- Left navigation links -->
            <ul
              class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref>
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <!-- Dashboard link -->
                <a
        class="text-black-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
        href="#"
        data-te-nav-link-ref
        v-bind:style="{ color: 'maroon' }"
      >Dashboard</a>
      
              </li>
              <!-- Team link -->
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                  v-bind:style="{ color: 'maroon' }"
                  >Schedule</a
                >
              </li>
              <!-- Projects link -->
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref
                  v-bind:style="{ color: 'maroon' }"
                  >Messages</a
                >
              </li>

              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                @click="$router.push('/login')"
                class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                data-te-nav-link-ref
                v-bind:style="{ color: 'maroon' }"
                >Logout</a
                >
              </li>
            </ul>
          </div>
      
         
            <!-- Container with two dropdown menus -->
            <div
              class="relative"
              data-te-dropdown-ref
              data-te-dropdown-alignment="end">
              <!-- First dropdown trigger -->
              <a
                class="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false">
                <!-- Dropdown trigger icon -->
                <span class="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clip-rule="evenodd" />
                  </svg>
                </span>

                
                <!-- Notification counter -->
                <span
                  class="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"
                  >1</span
                >
              </a>
             
              
            
            </div>
      
            <!-- Second dropdown container -->
            <div
              class="relative"
              data-te-dropdown-ref
              data-te-dropdown-alignment="end">
              
              <a
                class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false">
                <!-- User avatar -->
                <img
                  src="https://i.postimg.cc/d0bfFF4q/girl.png"
                  class="rounded-full"
                  style="height: 40px; width: 40px"
                  alt=""
                  loading="lazy" />
              </a> 
             
            </div>
          </div>
       
          
      </nav>
      
      
      
     
      
      </template>
      
      
      
      
      
      <script>
      
      console.log('dashboard component loaded');
      export default {
        name: 'dashboard',
        
       
      data() {
          return {
              navClass: 'fixed-nav relative flex w-full items-center justify-between bg-white py-2 shadow-md dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4',
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              zIndex: 100,
              
  
          }

          
      }

      
      };
  
      
      </script>
      