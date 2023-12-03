import DinamicInfo from "../../components/AnimationInfo/DinamicInfo";
import Collage from "../../components/Collage/Collage";
import InfoAbout from "../../components/InfoAbout/InfoAbout";
// import PhotoSwiper from "../../components/PhotoSwiper/PhotoSwiper";

function HomePage () {
    return (
        <div>
            {/* <PhotoSwiper /> */}
            <InfoAbout />
            <DinamicInfo />
            <Collage />
        </div>
    );
}
export default HomePage;