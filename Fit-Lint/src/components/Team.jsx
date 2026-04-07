// import { useState } from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

const Team = () => {
  // const [images, setImages] = useState({ img1: null, img2: null, img3: null, img4: null });

  // const handleUpload = (key, e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     setImages((prev) => ({ ...prev, [key]: url }));
  //   }
  // };

  // const ImageBox = ({ id }) => (
  //   <label className="cursor-pointer block w-full h-full">
  //     {images[id] ? (
  //       <img src={images[id]} alt="team" className="w-full h-full object-cover rounded-xl" />
  //     ) : (
  //       <div className="w-full h-full rounded-xl border-2 border-dashed border-gray-500 flex flex-col items-center justify-center text-gray-400 hover:border-gray-300 transition-colors">
  //         <span className="text-3xl mb-1">📷</span>
  //         <span className="text-xs">Upload photo</span>
  //       </div>
  //     )}
  //     <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(id, e)} />
  //   </label>
  // );

  return (
    <section id="team" className="min-h-screen flex flex-col items-center py-20 text-white font-sans">

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Meet Our Team
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-17 items-center mb-15">

        {/* Left - Green Text Box */}
        <div className="bg-green-500 rounded-2xl p-6 sm:w-full w-full h-full">
          <p className="text-white text-lg leading-relaxed">
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.
            Hic Fuga Cumque Distinctio Sunt. Minima Iste Tenetur
            Quas Totam. Mollitia, Accusantium? Lorem Ipsum
            Dolor Sit Amet Consectetur, Adipisicing Elit.
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.
            Hic Fuga Cumque Distinctio Sunt. Minima Iste Tenetur          
          </p>
        </div>

        {/* Right - 2x2 Image Grid */}
        <div className="grid grid-cols-2 gap-3 flex-1 sm:w-full w-full h-full">
          <img src={team1} alt="Team Member 1" className="w-full h-full object-cover rounded-xl" />
          <img src={team2} alt="Team Member 2" className="w-full h-full object-cover rounded-xl" />
          <img src={team3} alt="Team Member 3" className="w-full h-full object-cover rounded-xl" />
          <img src={team4} alt="Team Member 4" className="w-full h-full object-cover rounded-xl" />
        </div>

      </div>

      {/* Button */}
      {/* <button className="bg-green-500 text-white rounded-full px-8 py-3 text-sm hover:bg-green-600 transition-colors cursor-pointer">
        Start your training now
      </button> */}

    </section>
  );
}

export default Team;