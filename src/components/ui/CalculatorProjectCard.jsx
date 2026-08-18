import Image from 'next/image';
import newspaper from '@/assets/calculator.png';
export default function CalculatorProjectCard(
  {imageBg = "bg-lime-400",
  title = "A Simple Calculator",
  description = "A simple calculator built with modern web technologies.",
  tags = ["html", "css", "javascript"],
  liveLink = "https://calculator-nine-eosin-84.vercel.app/",
  githubLink = "https://github.com/AshikurRahamanAhad/calculator",
}) {
  return (
    <div className="relative inline-block group">
      <div className="absolute -inset-px transition-all duration-1000 opacity-70 bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-2xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" aria-hidden="true"/>

      <div className="relative w-full h-full bg-blue-50 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        {/* Figure */}
        <div className={`relative ${imageBg} h-56 flex items-center justify-center overflow-hidden`}>
          <Image
            src={newspaper}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Body */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
            
            
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap justify-end gap-2 mb-5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-black border border-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              title="View live demo"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg transition-all duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Live Link
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-900 bg-white border-2 border-gray-900 rounded-lg transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}