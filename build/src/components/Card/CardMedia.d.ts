import React from 'react';
import { CardMediaProps } from './Card.types';
declare function CardMedia<El extends HTMLElement = HTMLDivElement>({ children, mediaSrc, as, style, alt, ...props }: React.PropsWithChildren<CardMediaProps & React.HTMLProps<El>>): React.ReactElement;
declare namespace CardMedia {
    var propTypes: {
        alt: any;
        mediaSrc: any;
        style: any;
        as: any;
    };
    var displayName: string;
}
export default CardMedia;
