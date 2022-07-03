import AboutPage from "../components/AboutPage/AboutPage";
import MainPage from "../components/MainPage/MainPage";
export default function Home({ setIsOpen }) {
  return (
    <>
      <MainPage />
      <AboutPage setIsOpen={setIsOpen} />
    </>
  );
}
