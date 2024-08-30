import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
const Homepage = () => {
  return (
    <div>
      <div className="md:p-8 lg:w-3/4 m-auto">
        <Header />
        <Services />
      </div>
      <div className="border-b-2"></div>
      <div className="lg:w-3/4 m-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
