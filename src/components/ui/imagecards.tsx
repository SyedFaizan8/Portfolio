import { DirectionAwareHover } from "../ui/direction-aware-hover";

export default function Imagecards({ imageUrl, classname }: { imageUrl: string, classname: string }) {

    return (
        <div className={`relative flex items-center justify-center ${classname}`}>
            <DirectionAwareHover imageUrl={imageUrl}>
                <p className="font-bold text-lg">🤍</p>
                <p className="font-normal text-xs">pain uncertainty & constant work</p>
            </DirectionAwareHover>
        </div>
    );
}
