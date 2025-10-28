import React from 'react';

const Logo: React.FC = () => {
    return (
        <div className="text-center w-28">
            <svg viewBox="0 0 100 100" className="w-full h-auto font-display">
                 <defs>
                    <path id="circle-path" d="M 20, 50 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"/>
                </defs>
                <text x="50" y="35" textAnchor="middle" fontSize="40" fontWeight="bold" fill="currentColor">C</text>
                <text x="50" y="70" textAnchor="middle" fontSize="40" fontWeight="bold" fill="currentColor">O</text>
                <line x1="45" y1="50" x2="55" y2="50" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <span className="text-[11px] tracking-wider font-light leading-none block -mt-1">
                Chabad Opera
            </span>
        </div>
    );
};

const SmallLogo: React.FC = () => {
    return (
        <div className="text-center w-24">
             <svg viewBox="0 0 100 100" className="w-full h-auto font-display">
                <text x="50" y="35" textAnchor="middle" fontSize="40" fontWeight="bold" fill="currentColor">C</text>
                <text x="50" y="70" textAnchor="middle" fontSize="40" fontWeight="bold" fill="currentColor">O</text>
                <line x1="45" y1="50" x2="55" y2="50" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <span className="text-[8px] tracking-wider font-light leading-none block -mt-1">
                Chabad Opera
            </span>
        </div>
    );
}

export default Logo;
export { SmallLogo };
