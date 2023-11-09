// import { Press_Start_2P, Source_Code_Pro } from "next/font/google";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";



// const inter = Inter({ 
//   subsets: ["latin"],
//   variable: "--font-inter" 
// });


const gtWalsheim = localFont({
  src: "./GT Walsheim Bold.ttf",
  variable: "--font-gt",
});


const gtAmerica = localFont({
  src: "./GT America Regular.ttf",
  variable: "--font-america",
});


const ttInterfaces = localFont({
  src: "./TTInterfaces-Regular.ttf",
  variable: "--font-tt",
});


const sans = localFont({
  src: "./Sans.ttf",
  variable: "--font-sans",
});


const druk = localFont({
  src: "./Druk Wide Bold.ttf",
  variable: "--font-druk",
});





export { gtWalsheim, gtAmerica, ttInterfaces, sans, druk };
