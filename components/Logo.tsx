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
            <span className="text-[10px] tracking-wider font-light leading-tight block mt-2">
                Center Vienna<br/>Shabbat Chabad
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
            <span className="text-[7px] tracking-wider font-light leading-tight block mt-1">
                Center Vienna<br/>Shabbat Chabad
            </span>
        </div>
    );
}

export default Logo;
export { SmallLogo };