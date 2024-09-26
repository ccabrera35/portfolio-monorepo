export default function Logo() {
  return (
    <a href="." className="-ml-2 select-none">
      <h1 className="flex items-center text-[rgba(255,255,255,0.75)] font-normal text-[14px]">
        {`<`}&nbsp;
        <p className="text-base text-white">
          <span className="italic font-light">Dev</span>
          <span className="font-medium">Hunt</span>
        </p>
        &nbsp;{`/>`}
      </h1>
    </a>
  );
}
