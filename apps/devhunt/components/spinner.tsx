
export default function Spinner({ size = "85" }) {
  return (
    <div
      style={{
        width: size,
        height: size
      }}
      className={`absolute rounded-full border-[5px] border-[#e2e7e9] border-l-[#ccd1d3] animate-spinner`}
    />
  );
}
