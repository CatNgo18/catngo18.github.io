import { Roboto_Slab, Poppins, Shrikhand } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

export const poppins: NextFontWithVariable = Poppins({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-poppins',
    display: 'swap',
});

export const roboto_slab: NextFontWithVariable = Roboto_Slab({
    subsets: ['latin'],
    weight: ['400','700'],
    variable: '--font-roboto-slab',
    display: 'swap',
});

export const shrikhand: NextFontWithVariable = Shrikhand({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-shrikhand',
    display: 'swap',
});