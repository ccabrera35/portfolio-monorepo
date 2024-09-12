export default function Footer() {
  return (
    <footer className="max-w-[1000px] px-[12px] mx-auto mt-[15px] pb-[15px] flex items-center justify-between text-[#a4a9ac]">
      <small className="text-[11px] max-w-[200px] flex gap-x-1">
        <p className="leading-[1.2]">
          © Copyright 2024
        </p>
        <a href="/" className="leading-[1.2]">Catherine Cabrera</a>
      </small>
      <p className="text-[11px] self-start">
        <span className="font-bold">109573</span> total jobs available
      </p>
    </footer>
  );
}