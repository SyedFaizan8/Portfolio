import { DirectionAwareHover } from "../ui/direction-aware-hover";

export default function Imagecards({ imageUrl, classname }: { imageUrl: string, classname: string }) {

    return (
        <div className={`relative flex items-center justify-center ${classname}`}>
            <DirectionAwareHover imageUrl={imageUrl}>
                <p className="font-bold text-xl">🤍</p>
                <p className="font-normal text-sm">peace over all</p>
            </DirectionAwareHover>
        </div>
    );
}
