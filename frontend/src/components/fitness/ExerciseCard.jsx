import React from 'react';
import { Link } from "react-router-dom";

function ExerciseCard({imageUrl, title, description,  muscles, _id}) {
    return (
        <Link to={`/exercises/${_id}`} className="w-full max-w-sm border border-gray-300 rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 text-left cursor-pointer">

            {/* Top half: GIF/Image */}
            <div className="w-full h-40 ">
                <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                />
            </div>

            {/* Bottom half: description */}
            <div className="relative p-4 h-18 bg-white overflow-hidden">
            <h2 className="text-lg font-medium">{title}</h2>

            {/* Muscles worked */}
            <div className="flex flex-wrap gap-2 mt-1">
                {(muscles || []).map((muscle, index) => (
                    <span key={index} className="text-xs text-blue-800 font-semibold bg-blue-100 px-2 py-1 rounded">
                        {muscle.name} 
                    </span>
                ))}
            </div>
            
            <p className="text-xs text-gray-500 mt-2 line-clamp-4">
                {description}
            </p>

            {/* Fade-out overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>

        </Link>
    );
}

export default ExerciseCard;
