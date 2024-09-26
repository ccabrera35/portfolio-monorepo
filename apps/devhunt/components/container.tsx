export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row mt-[40px] my-0 h-full md:h-[616px] lg:w-[976px] md:w-[710px] sm:w-[600px] w-[300px] bg-white rounded-[8px] rounded-tr-[9px] shadow-[0_3px_5px_rgba(0,0,0,0.07)] mx-auto animate-intro delay-[0.2s] duration-[0.3s]">
      {children}
    </div>
  );
}
