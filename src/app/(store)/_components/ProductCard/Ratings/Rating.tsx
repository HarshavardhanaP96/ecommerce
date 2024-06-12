import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'
    
interface RatingProps {
    star: number; // Ensures type safety for the rating prop
}
  
const Rating: React.FC<RatingProps> = ({ star }) => {
    // Calculate the number of filled stars, half-filled stars, and empty stars
    const filledStars = Math.floor(star);
    const halfStar = star % 1 >= 0.5;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center w-full h-4 my-2">
        {/* Render filled stars */}
        {Array(filledStars).fill(null).map((_, index) => (
            <FaStar key={index} size={10} />
        ))}

        {/* Render half-filled star (if applicable) */}
        {halfStar && <FaStarHalfStroke key="half" size={10} />}

        {/* Render empty stars */}
        {Array(emptyStars).fill(null).map((_, index) => (
            <FaRegStar key={index + filledStars + (halfStar ? 1 : 0)} size={10} />
        ))}
        </div>
    );
};

export default Rating;
  