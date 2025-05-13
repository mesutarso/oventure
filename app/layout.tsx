import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AosProvider from "@/providers/aos";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MaintenanceMode from "@/components/maintenance";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Decarbone RDC",
  description: "Plateforme innovante spécialisée dans la formation et consultances en finance climat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <AosProvider>
        <body className={poppins.className}>


          <Header />
          {children}
          <Footer />
        </body>
      </AosProvider>

    </html>
  );
}
