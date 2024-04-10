"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { SetStateAction, useState } from "react";
import { PredictionCard } from "../components/resultcard";
import Modal from "../components/model";
import Particles from "../components/particles";



export default function Example() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null); // Update state type
    const [selectedModel, setSelectedModel] = useState('');
    const [predictionData, setPredictionData] = useState<PredictionData[]>([]); // Use an array to store multiple prediction data
    const [lastSelectedModel, setLastSelectedModel] = useState(""); // State to hold the last selected model
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle image click to zoom
    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    type PredictionData = {
        id: string; // Add an ID to uniquely identify each prediction
        predictedClass: string | null;
        probability: number;
        classResults: { [key: string]: number };
        modelPerformance: {
            accuracy: number;
            scoreF1: number;
        };
    };

    // Function to handle "Generate" button click
    const handleGenerate = () => {
        // Check if a model is selected
        if (!selectedModel) {
            alert('Please select a model');
            return;
        }

        // Check if the same model is selected
        if (selectedModel === lastSelectedModel) {
            alert('Please select a different model');
            return;
        }
        
        // Perform the generation logic here and update predictionData state
        const newPredictionData: PredictionData = {
            id: Math.random().toString(), // Generate a unique ID
            predictedClass: "New Prediction", // Example prediction data
            probability: Math.random(), // Example probability
            classResults: {
                "New Prediction": Math.random(), // Example class result
            },
            modelPerformance: {
                accuracy: Math.random(), // Example accuracy
                scoreF1: Math.random(), // Example scoreF1
            }
        };

        setPredictionData([...predictionData, newPredictionData]);
        setLastSelectedModel(selectedModel);
    };

    // Function to handle model selection
    const handleModelSelect = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedModel(event.target.value);
    };

    // Function to handle image upload
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setSelectedImage((reader.result as string) || null);
                    // Clear predictionData array when a new image is uploaded
                    setPredictionData([]);
                } else {
                    setSelectedImage(null);
                }
            };
            reader.readAsDataURL(file);
        }
    };


    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                <Card>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center ml-8">
                        <div className="md:col-span-1 md:w-2/3 flex flex-col items-center mr-8 ml-8">
                            {selectedImage && (
                                <div className="mb-4 overflow-hidden rounded-lg shadow-lg w-48 h-42 bg-gray-200 relative">
                                    <img
                                        src={selectedImage}
                                        alt="Uploaded"
                                        className="object-cover w-full h-full cursor-pointer"
                                        onClick={handleImageClick}
                                    />
                                </div>
                            )}
                            <label htmlFor="photoUpload" className="cursor-pointer mb-4 rounded-lg overflow-hidden">
                                <div className="bg-transparent w-48 border-zinc-500-transparent text-zinc-500 font-bold glowing animate-pulse flex items-center justify-center rounded-full shadow-md transition-transform transform hover:scale-105">
                                    <span>Upload Photo</span>
                                </div>
                                <input
                                    type="file"
                                    id="photoUpload"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                            </label>
                            <Modal isOpen={isModalOpen} onClose={closeModal}>
                                {selectedImage && (
                                    <img src={selectedImage} alt="Uploaded" className="max-w-full max-h-full" />
                                )}
                            </Modal>
                        </div>
                        <div className="md:col-span-2 flex flex-col items-center justify-center mr-8 mt-8 mb-8 ml-14">
                            <div className="flex flex-col items-center">
                                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display mb-4">Name</span>
                                <input
                                    type="text"
                                    id="nameInput"
                                    className="border border-zinc-300 rounded-md px-3 py-2 mb-4 bg-transparent duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="flex flex-col items-center mb-4">
                                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display mb-2">Select model</span>
                                <select
                                    id="modelSelect"
                                    onChange={handleModelSelect}
                                    className="border rounded-md px-3 py-2 mb-2 duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange"
                                >
                                    <option value="">Select a Model</option>
                                    <option value="Model 1">Model 1</option>
                                    <option value="Model 2">Model 2</option>
                                </select>
                            </div>
                            <button
                                onClick={handleGenerate}
                                disabled={!selectedModel}
                                className="text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange"
                            >
                                Generate
                            </button>
                        </div>
                    </div>
                </Card>
                {/* Render prediction cards */}
               

{/* Render prediction card if predictionData is available */}
{/* Render prediction card if predictionData is available */}
{predictionData.map((data) => (
    <div key={data.id} className="absolute" >
        <div className="flex items-center justify-center">
            <PredictionCard
                predictedClass={data.predictedClass}
                probability={data.probability}
                classResults={data.classResults}
                modelPerformance={data.modelPerformance}
            />
        </div>
    </div>
))}


			</div>
		</div>
	);
}
