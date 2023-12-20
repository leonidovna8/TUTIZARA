import * as React from "react";
import HeaderGeneral from "../../components/HeaderGeneral/HeaderGeneral";
import PhotoSwiper from "../../components/PhotoSwiper/PhotoSwiper";
import InfoAbout from "../../components/InfoAbout/InfoAbout";
import DynamicInfo from "../../components/DynamicInfo/DynamicInfo";
import Review from "../../components/Review/Review";
import Collage from "../../components/Collage/Collage";
import CertificatInfo from "../../components/CertificatInfo/CertificatInfo";

function HomePage() {
  return (
    <>
      <HeaderGeneral />
      <PhotoSwiper />
      <InfoAbout />
      <DynamicInfo />
      <Review />
      <Collage />
      <CertificatInfo />
    </>
  );
}
export default HomePage;
