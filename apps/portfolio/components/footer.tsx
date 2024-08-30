export default function Footer() {
  return (
    <footer className="flex flex-col items-center mb-10 px-4 text-center text-gray-500">
      <div className="bg-gray-200 mb-10 h-[2px] w-[50rem] rounded-full hidden sm:block dark:bg-opacity-20"></div>
      <small className="mb-2 block text-xs">
        &copy; 2024 Catherine. All rights reserved.
        <p className="text-xs">
          <span className="font-semibold">About this website: </span>built with
         
         
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion, React Email and Resend.
        </p>
      </small>
    </footer>
  );
}
