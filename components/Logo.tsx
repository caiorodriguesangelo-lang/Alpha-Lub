
import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", height = 40 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        height={height} 
        viewBox="0 0 500 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Gear Icon */}
        <path 
          d="M60 20L65 5L85 5L90 20C95 22 100 25 104 28L118 20L130 32L122 46C125 50 128 55 130 60L145 65V85L130 90C128 95 125 100 122 104L130 118L118 130L104 122C100 125 95 128 90 130L85 145H65L60 130C55 128 50 125 46 122L32 130L20 118L28 104C25 100 22 95 20 90L5 85V65L20 60C22 55 25 50 28 46L20 32L32 20L46 28C50 25 55 22 60 20Z" 
          fill="#DC2626" 
        />
        {/* Outer Drop */}
        <path 
          d="M75 35C55 55 45 75 45 95C45 115 58 128 75 128C92 128 105 115 105 95C105 75 95 55 75 35Z" 
          fill="white" 
        />
        {/* Inner Drop */}
        <path 
          d="M75 55C65 70 60 85 60 95C60 105 67 112 75 112C83 112 90 105 90 95C90 85 85 70 75 55Z" 
          fill="black" 
        />
        
        {/* Text ALPHA (Red) */}
        <text 
          x="160" 
          y="95" 
          fill="#DC2626" 
          style={{ font: 'bold 75px Oswald, sans-serif', letterSpacing: '-2px' }}
        >
          ALPHA
        </text>
        
        {/* Text LUB (White) */}
        <text 
          x="375" 
          y="95" 
          fill="white" 
          style={{ font: 'bold 75px Oswald, sans-serif', letterSpacing: '-2px' }}
        >
          LUB
        </text>
        
        {/* Text CENTER (White, smaller) */}
        <text 
          x="345" 
          y="135" 
          fill="white" 
          style={{ font: '400 28px Oswald, sans-serif', letterSpacing: '8px' }}
        >
          CENTER
        </text>
      </svg>
    </div>
  );
};
