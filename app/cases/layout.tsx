export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
