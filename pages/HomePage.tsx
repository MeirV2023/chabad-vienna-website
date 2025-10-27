import React from 'react';
import Logo from '../components/Logo';

const HomePage: React.FC = () => {
  return (
    <div className="h-screen w-full relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRk7BlqOjlhJvA/0gVg86C_OuHWvsaW3lYW0Vd7PyTRQxHM/OwQH1C-ZwyvywCBMA0rMQz-E74JErGGi/GrNY73zTIxBGiKuyUWcVPsI5uXujIbvi/ItQB1Bl9p6LzdBnXPUjo-Q.jpg')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <div className="transform scale-125 md:scale-150">
            <Logo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
