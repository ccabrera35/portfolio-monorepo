export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-lg:flex-col max-lg:h-auto max-lg:w-full max-lg:max-w-[800px] max-lg:rounded-[8px] max-lg:overflow-hidden mt-[40px] my-0 h-[616px] w-[976px] bg-white rounded-[8px] rounded-tr-[9px] shadow-[0_3px_5px_rgba(0,0,0,0.07)] mx-auto animate-intro delay-[0.2s] duration-[0.3s]">
      {children}
    </div>
  );
}
