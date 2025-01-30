/* eslint-disable @next/next/no-img-element */
import { nanoid } from "nanoid";

import { image, images_data } from "./data";

export default function ImagesBlock () {
    return(
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-16px mt-48px">
            {
                images_data.map((image_item: image) => (
                    <div key={nanoid()}
                        className="flex flex-col gap-8px">
                        <img
                            src={image_item.image}
                            alt={image_item.image_alt}
                            loading="lazy"
                            style={{ marginBottom: 0 }} />
                        <p style={{ marginBottom: 0 }}>{image_item.image_alt}</p>
                    </div>
                ))
            }
        </div>
    )
}