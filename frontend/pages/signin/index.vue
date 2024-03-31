<template>
  <!-- <Header /> -->
  <main class="min-h-svh">
    <div class="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
      <div
        class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable"
      >
        <div class="flex items-center justify-center w-full lg:p-12">
          <div class="flex items-center xl:p-10">
            <form
              class="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
            >
              <img src="/logo.svg" class="h-16 w-16 mx-auto" alt="" />
              <h3 class="mb-3 text-4xl font-extrabold text-dark-slate-900">
                Sign In
              </h3>
              <p class="mb-4 text-slate-700">Enter your email and password</p>
              <a
                class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-slate-900 bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:ring-slate-300"
              >
                <img
                  class="h-5 mr-2"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                  alt=""
                />
                Sign in with Google
              </a>
              <div class="flex items-center mb-3">
                <hr class="h-0 border-b border-solid border-slate-500 grow" />
                <p class="mx-4 text-slate-600">or</p>
                <hr class="h-0 border-b border-solid border-slate-500 grow" />
              </div>
              <label for="email" class="mb-2 text-sm text-start text-slate-900"
                >Email*</label
              >
              <input
                id="email"
                type="email"
                placeholder="mail@loopple.com"
                class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-400 mb-7 placeholder:text-slate-700 bg-slate-200 text-dark-slate-900 rounded-2xl"
              />
              <label
                for="password"
                class="mb-2 text-sm text-start text-slate-900"
                >Password*</label
              >
              <input
                id="password"
                type="password"
                placeholder="Enter a password"
                class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-400 placeholder:text-slate-700 bg-slate-200 text-dark-slate-900 rounded-2xl"
              />
              <div class="flex flex-row justify-between mb-8">
                <label
                  class="relative inline-flex items-center mr-3 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked
                    value=""
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border-2 rounded-sm border-slate-500 peer peer-checked:border-0 peer-checked:bg-[#00ADB5]"
                  >
                    <img
                      class=""
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                      alt="tick"
                    />
                  </div>
                  <span class="ml-3 text-sm font-normal text-slate-900"
                    >Keep me logged in</span
                  >
                </label>
                <a
                  href="javascript:void(0)"
                  class="mr-4 text-sm font-medium text-[#00ADB5]"
                  >Forget password?</a
                >
              </div>
              <button
                class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-[#00ADB5]"
              >
                Sign In
              </button>
              <p class="text-sm leading-relaxed text-slate-900">
                Not registered yet?
                <NuxtLink to="/signup" class="font-bold text-slate-700"
                  >Create an Account
                </NuxtLink>
              </p>
              <div class="py-12">
                <p class="italic">Temporary Design</p>
                <p>Assign to</p>
                <NuxtLink
                  to="https://github.com/julygregory"
                  class="flex gap-2 justify-center items-center"
                >
                  <img src="/july.jpeg" class="h-12 w-12 rounded-full" alt="" />
                  <p>@julygregory</p>
                </NuxtLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
