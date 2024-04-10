"use client";
import { ArrowBigRight, ArrowRightIcon, AxeIcon, Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";



const models = [
    {
        id:"1",
        name: "MNIST",
        description: "The MNIST dataset consists of 60,000 training images and 10,000 testing images of handwritten digits.",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/MnistExamples.png/440px-MnistExamples.png",
        performanceMetrics: {
            accuracy: "95%",
            precision: "92%",
            recall: "94%",
            f1Score: "93%"
        },
        modelDescription: "This model is a simple Convolutional Neural Network (CNN) trained on the MNIST dataset for digit recognition.",
        advantages: "High accuracy, widely used as a benchmark dataset.",
        applications: "Handwritten digit recognition, optical character recognition."
    },
    {
        id:"2",
        name: "ResNet",
        description: "ResNet is a deep convolutional neural network architecture that introduces skip connections to address the vanishing gradient problem.",
        imageSrc: "https://miro.medium.com/max/1336/1*jXv4pO9iL5LtmRA5e9hc-g.png",
        performanceMetrics: {
            accuracy: "96%",
            precision: "94%",
            recall: "95%",
            f1Score: "95%"
        },
        modelDescription: "This model is a Residual Neural Network (ResNet) with 50 layers, trained on the ImageNet dataset for image classification.",
        advantages: "State-of-the-art performance on image recognition tasks, handles deeper networks effectively.",
        applications: "Image classification, object detection, image segmentation."
    },
    {
        id:"3",
        name: "BERT",
        description: "BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based machine learning model for natural language understanding.",
        imageSrc: "https://huggingface.co/front/thumbnails/bert.png",
        performanceMetrics: {
            accuracy: "92%",
            precision: "90%",
            recall: "91%",
            f1Score: "91%"
        },
        modelDescription: "This model is a pre-trained BERT model fine-tuned on various NLP tasks such as sentiment analysis, named entity recognition, and question answering.",
        advantages: "Captures bidirectional context in text, achieves state-of-the-art results on various NLP benchmarks.",
        applications: "Text classification, sentiment analysis, question answering, language translation."
    },
    // Add more models here as needed
];


export default function Example() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleButtonClick = (modelId: string) => {
      
        if (searchParams) {
        const params = new URLSearchParams(searchParams);
        if (modelId) {
          params.set('query', modelId);
        } else {
          params.delete('query');
        }
        replace(`${pathname}/${modelId}?${params.toString()}`);
    } 
    };
    // Inside your component
const [isSmallScreen, setIsSmallScreen] = useState(false);

useEffect(() => {
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640); // Change the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
    return (

        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <div className="mt-16">
                <Navigation />
            </div>
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <h1 className="text-5xl font-bold text-white mb-8 mt-12 animate-fade-in text-edge-outline duration-1000 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500">Data</h1>
                <div className="grid gap-8 lg:grid-cols-2">
                <Card>
    <div className="z-10 flex flex-col items-center">
        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display mt-4">CIFAR-10</span>
        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
            CIFAR-10 is a dataset commonly used in computer vision for image classification tasks. It contains 60,000 images in color distributed across 10 different classes of objects.
        </span>
        <span className="mt-4 relative z-10 flex items-center justify-center h-50 w-20 text-sm duration-1000 border overflow-hidden text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
            <img src="https://toppng.com/uploads/preview/image-imagenes-de-disenos-11562942007eny9do2lop.png" alt="" className="h-full w-full object-cover" />
        </span>
    </div>
</Card>

<Card>
    <div className="z-10 flex flex-col items-center">
        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display mt-4">Fashion-MNIST</span>
        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
            Fashion-MNIST is a dataset consisting of 70,000 grayscale images of size 28x28 pixels, categorized into 10 different clothing categories.
        </span>
        <span className="mt-4 relative z-10 flex items-center justify-center h-50 w-20 text-sm duration-1000 border overflow-hidden text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
            <img src="https://toppng.com/uploads/preview/image-imagenes-de-disenos-11562942007eny9do2lop.png" alt="" className="h-full w-full object-cover" />
        </span>
    </div>
</Card>

                    {/* Add other data cards similarly */}
                </div>
                <h1 className="text-5xl font-bold text-white mt-12 mb-8">Models</h1>
        <div className="flex justify-center">
            {isSmallScreen ? (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {models.map((model, index) => (
                        <div key={index} className="flex justify-center mb-8">
                            <Card>
                                    <div className="z-10 flex flex-col items-center hover:cursor-pointer hover:bg-zinc-900">
                                        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display mt-4">{model.name}</span>
                                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">{model.description}</span>
                                        <span className="mt-4 relative z-10 flex items-center justify-center h-50 w-20 text-sm duration-1000 border overflow-hidden text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                            <img src={model.imageSrc} alt="" className="h-full w-full object-cover" />
                                        </span>
                                        <div className="mt-4 text-xs text-center text-gray-400">
                                            <span className="font-bold">Performance Metrics:</span>
                                            <p>Accuracy: {model.performanceMetrics.accuracy}</p>
                                            <p>Precision: {model.performanceMetrics.precision}</p>
                                            <p>Recall: {model.performanceMetrics.recall}</p>
                                            <p>F1-score: {model.performanceMetrics.f1Score}</p>
                                        </div>
                                        <div className="mt-4 text-xs text-center text-gray-400">
                                            <span className="font-bold">Description:</span>
                                            <p>{model.modelDescription}</p>
                                        </div>
                                        <div className="mt-4 text-xs text-center text-gray-400">
                                            <span className="font-bold">Advantages:</span>
                                            <p>{model.advantages}</p>
                                        </div>
                                        <div className="mt-4 text-xs text-center text-gray-400 mb-4">
                                            <span className="font-bold">Applications:</span>
                                            <p>{model.applications}</p>
                                        </div>
                                    </div>
                                </Card>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="swiper-container mb-8" style={{ maxWidth: '800px', width: '100%' }}>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        pagination={true}
                    >
                        {models.map((model, index) => (
                            <SwiperSlide key={index}>
                               <Card>
                                    <div className="z-10 flex flex-col items-center hover:cursor-pointer bg-zinc-900">
                                        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display mt-4">{model.name}</span>
                                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">{model.description}</span>
                                        <span className="mt-4 relative z-10 flex items-center justify-center h-50 w-20 text-sm duration-1000 border overflow-hidden text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                            <img src={model.imageSrc} alt="" className="h-full w-full object-cover" />
                                        </span>
                                        <div className="mt-4 text-xs text-center text-gray-400">
                                            <span className="font-bold">Performance Metrics:</span>
                                            <p>Accuracy: {model.performanceMetrics.accuracy}</p>
                                            <p>Precision: {model.performanceMetrics.precision}</p>
                                            <p>Recall: {model.performanceMetrics.recall}</p>
                                            <p>F1-score: {model.performanceMetrics.f1Score}</p>
                                        </div>
                                        <div className="mt-4 text-xs text-center text-gray-400">
                                            <span className="font-bold">Description:</span>
                                            <p>{model.modelDescription}</p>
                                        </div>
                                        <div className="mt-4 text-xs text-center text-gray-400">
                                            <span className="font-bold">Advantages:</span>
                                            <p>{model.advantages}</p>
                                        </div>
                                        <div className="mt-4 text-xs text-center text-gray-400 mb-4">
                                            <span className="font-bold">Applications:</span>
                                            <p>{model.applications}</p>
                                        </div>
                                        <div className="absolute bottom-0 right-0 mr-4 mb-4">
                                        <button className="relative bg-transparent group-hover:bg-zinc-900 border border-zinc-500 text-zinc-200 animate-pulse hover:animate-none text-white font-bold py-2 px-4 rounded-full" onClick={() => handleButtonClick(model.id)}>
                <ArrowRightIcon />
            </button>
        </div>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
            <footer className="text-center py-4 bg-zinc-900 text-white bg-transparent animate-pulse hover:animate-none  border-zinc-700">
                Made with ❤️
            </footer>
        </div>
        </div>
    );
}