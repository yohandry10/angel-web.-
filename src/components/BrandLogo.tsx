/** One transparent brand asset and framing across the corporate site and ERP. */
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`nextelco-brandmark ${className}`}
      viewBox="80 155 2040 420"
      role="img"
      aria-label="NEXTELCO"
      width="224"
      height="46"
    >
      <image
        href="/media/brand/nextelco-on-dark.webp"
        className="nextelco-logo-on-dark"
        width="2172"
        height="724"
      />
      <image
        href="/media/brand/nextelco-on-light.webp"
        className="nextelco-logo-on-light"
        width="2172"
        height="724"
      />
    </svg>
  );
}
