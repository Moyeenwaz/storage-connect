import React from "react";
import CourseDetailHeader from "../components/course-detail-component/CourseDetailHeader";
import DoYouHaveASelfStorage from "../components/course-detail-component/DoYouHaveASelfStorage";
import MoreInformation from "../components/course-detail-component/MoreInformation";
import OtherSimilarPost from "../components/course-detail-component/OtherSimilarPost";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CourseDetailPage = () => {
  return (
    <>
      <Navbar color="#1849C6" />
      <CourseDetailHeader />
      <MoreInformation />
      <DoYouHaveASelfStorage />
      <OtherSimilarPost />
      <Footer />
    </>
  );
};

export default CourseDetailPage;
