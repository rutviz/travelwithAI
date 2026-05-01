import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TravelWithAI",
  description: "AI-powered travel planning and booking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
