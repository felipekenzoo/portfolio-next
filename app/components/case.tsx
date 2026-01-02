import Image from "next/image";

export interface CaseProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  link: string;
  githubUrl?: string;
  behanceUrl?: string;
}

export default function Case({
  title,
  description,
  imageUrl,
  imageAlt,
  link,
  tags,
  githubUrl,
  behanceUrl,
}: CaseProps) {
  return (
    <div className="card-container flex flex-col bg-white rounded-3xl border border-zinc-200 p-7">
      <div className="image-wrapper">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="card-image rounded-3xl mb-6 border border-zinc-200"
          priority
          quality={100}
          width={800}
          height={450}
          layout="responsive"
        />
      </div>

      <div className="tags-row flex flex-wrap gap-2 mb-4">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={index}
              className="tag-badge bg-zinc-100 px-3 py-1 rounded-full text-zinc-600 border border-zinc-400 text-sm"
            >
              {tag}
            </span>
          ))}
      </div>

      <h3 className="text-3xl text-zinc-950 font-bold mb-2">{title}</h3>
      <p className="text-zinc-700 leading-relaxed">{description}</p>

      <div className="buttons-row flex flex-wrap gap-3 mt-6">
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-300 text-violet-950 hover:bg-violet-200 px-5 py-2 rounded-full font-semibold transition-colors"
        >
          Ver projeto ↗
        </a>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 text-white hover:bg-zinc-900 px-5 py-2 rounded-full font-semibold transition-colors flex items-center gap-2"
          >
            GitHub
          </a>
        )}

        {behanceUrl && (
          <a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-full font-semibold transition-colors"
          >
            Behance
          </a>
        )}
      </div>
    </div>
  );
}