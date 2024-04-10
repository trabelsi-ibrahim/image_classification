import Draggable from 'react-draggable'; // Adjust import statement
import { Card } from './card';
import './styles.css'; // Import the CSS file
import { useState } from 'react';

export const PredictionCard = ({ predictedClass, probability, classResults, modelPerformance }: { predictedClass: any, probability: number, classResults: any, modelPerformance: any }) => {
    // State to track whether the mouse is over the card
    const [isHovered, setIsHovered] = useState(false);

    // Function to handle mouse enter event
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (

        <Draggable
            axis="both" // Allow dragging in both X and Y directions
            defaultPosition={{ x: 0, y: 0 }} // Initial position
            grid={[25, 25]} // Snap to grid
            scale={1} // Scaling factor
        >
            <div
            className="card-wrapper"
            onMouseEnter={handleMouseEnter} // Set isHovered to true when the mouse enters the card
            onMouseLeave={handleMouseLeave} // Set isHovered to false when the mouse leaves the card
        >
            <div className={`floating-card ${isHovered ? '' : 'animate-float'}`}> {/* Apply the animation class conditionally based on isHovered */}
                <Card>
                    <div className="w-full max-w-sm bg-zinc-800 rounded-lg shadow-md dark:bg-zinc-700 dark:border-zinc-600">
                        <div className="flex flex-col items-center pb-10">
                            <h5 className="mb-1 text-xl font-medium text-zinc-200 dark:text-zinc-300">{predictedClass}</h5>
                            <span className="text-sm text-zinc-400 dark:text-zinc-500">{probability}</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                {/* Add your additional content here */}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        </Draggable>
    );
};
