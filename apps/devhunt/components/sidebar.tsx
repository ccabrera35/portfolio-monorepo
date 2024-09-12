export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className="w-[340px] flex flex-col">{children}</div>;
}

export function SidebarTop({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between p-[10px] px-[20px] border-b border-[#e8edf0]">
      {children}
    </div>
  );
}
