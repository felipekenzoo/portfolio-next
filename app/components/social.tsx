import Image from "next/image";

export interface SocialLinkProps {
    source: string;
    url: string;
    title: string;
}

export default function SocialLink({ source, url, title }: SocialLinkProps) {
    return (
        <div className="flex items-center">
            <a href={url} className="flex items-center hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Image
                    src={source}
                    alt={title}
                    width={24}
                    height={24}
                    className="mr-2"
                />
                <span className="text-zinc-950 font-medium"></span>
                <span className="text-zinc-950 font-medium">{title}</span>
            </a>
        </div>
    )
}