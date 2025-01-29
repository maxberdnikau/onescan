/* eslint-disable @next/next/no-img-element */
import { nanoid } from "nanoid";

import { slider_data, slider_item } from "app/components/main/home/Slider/data";

export default function ImagesBlock () {
    return(
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-16px mt-48px">
            {
                slider_data.map((slide: slider_item) => (
                    <div key={nanoid()}
                        className="flex flex-col gap-8px">
                        <img
                            src={slide.image}
                            alt={slide.image_alt}
                            loading="lazy"
                            style={{ marginBottom: 0 }} />
                        <p style={{ marginBottom: 0 }}>{slide.image_alt}</p>
                    </div>
                ))
            }
        </div>
    )
}