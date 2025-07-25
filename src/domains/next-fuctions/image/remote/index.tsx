import Image, { ImageLoaderProps } from "next/image";
import { FC } from "react";

const RemoteMain: FC = () => {
  return (
		<main>
			<Image
				src="/img/image.jpeg"
				width={500}
				height={350}
				alt=""
				placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGPIrOzOqWhbuHYvw7yNBxK9w/7/+s+g7xSiJaG+eeNBBgY2UUev6LKyZgByfxCvAnvQuAAAAABJRU5ErkJggg=="
        priority
			/>
			{/* remote image는 가로세로 모두 지정해줘야 한다. */}
		</main>
  );
};

export { RemoteMain };

// function imageLoader(params: ImageLoaderProps) {
//   const { src, width, quality } = params;

//   console.log(params);
  
//   return `/img${src}?w=${width}&q=${quality}`;
// }