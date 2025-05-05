import Image, { StaticImageData } from "next/image";

interface BannerProps {
  title: string;
  highlightedWord?: string;
  description: string;
  backgroundImage: StaticImageData; // لو تستخدم صور محلية من Assets
  bottomTitle?: string;
  bottomText?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  highlightedWord,
  description,
  backgroundImage,
  bottomTitle,
  bottomText,
}) => {
  return (
    <section>
      {/* Top Section with Background Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src={backgroundImage}
          alt="Background Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}{" "}
            {highlightedWord && (
              <span className="text-blue-400">{highlightedWord}</span>
            )}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            {description}
          </p>
        </div>
      </div>

      {/* Optional Bottom Section */}
      {(bottomTitle || bottomText) && (
        <div className="container mx-auto px-4 py-12 text-center">
          {bottomTitle && (
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {bottomTitle}
            </p>
          )}
          {bottomText && <p className="text-lg text-gray-600">{bottomText}</p>}
        </div>
      )}
    </section>
  );
};

export default Banner;
