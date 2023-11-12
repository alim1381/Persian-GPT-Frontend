function AuthLayout({ children }) {
  return (
    <div class=" relative overflow-x-hidden min-h-screen flex justify-center items-center">
      <div class="absolute blur rotate-item w-60 h-60 rounded-xl bg-emerald-500 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class="absolute blur rotate-item w-48 h-48 rounded-xl bg-emerald-500 bottom-10 -right-10 transform rotate-12 hidden md:block"></div>
      {children}
      <div class="w-40 h-20 blur rotate-item absolute bg-emerald-500 rounded-full top-16 right-12 hidden md:block"></div>
      <div class="w-20 h-40 blur rotate-item absolute bg-emerald-500 rounded-full bottom-16 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
}

export default AuthLayout;
