import Image from "next/image";

export interface CaseProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    link: string;
    tags: string[];
}

export default function Case({ title, description, imageUrl, imageAlt, link, tags }: CaseProps) {
  return (
    <div className="card-container">
      <div className="image-wrapper">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="card-image"
          priority
          quality={100}
          fill
        />
      </div>

      <div className="tags-row">
        {tags && tags.map((tag, index) => (
          <span key={index} className="tag-badge">
            {tag}
          </span>
        ))}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <a href={link} className="btn-link">
        Ver projeto ↗
      </a>
    </div>
  );
}