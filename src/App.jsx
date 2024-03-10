import React from "react";
import {Bestseller,Blogs,Categories,DailyDeal,Footer,Hero,Lifestyle,Navbar,NewLaunches,Press} from "../src/components";

const App = () => {
  return(
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Bestseller />
      <DailyDeal />
      <Categories />
      <NewLaunches />
      <Lifestyle />
      <Blogs />
      <Press />
      <Footer />
    </div>
  )
};

export default App