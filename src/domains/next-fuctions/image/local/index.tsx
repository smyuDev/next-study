import { FC } from "react";
import tortoise from "./image.jpeg";
import Image from "next/image";

const LocalMain: FC = () => {

  console.log(tortoise);

  return (
		<main>
      <Image src={tortoise} width={500} placeholder="empty" quality={100} priority alt="" /> 
      {/* priority: 우선순위를 주는 옵션 */}
		</main>
  );
}

export {LocalMain}