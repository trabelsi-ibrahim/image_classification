"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import { useRouter, useSearchParams } from 'next/navigation';

import models from '../../../data/models'; // Import your model data
export default function Example() {
    const searchParams = useSearchParams();

    const modelId = searchParams && searchParams.get('query');
  console.log(modelId);
    if (!modelId) {
      console.log("Model ID not found in query parameters");
      return <div>Model ID not found in query parameters</div>;
    }
  
    const model = models.find((model) => model.id === modelId);
  
    if (!model) {
      console.log("Model not found");
      return <div>Model not found</div>;
    }
  
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{model.name}</h1>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
            <img src={model.imageSrc} alt={model.name} className="w-40 h-40 object-cover rounded-full" />
            <p className="text-gray-600 mt-4">{model.description}</p>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-800">Performance Metrics</h2>
              <p>Accuracy: {model.performanceMetrics.accuracy}</p>
              <p>Precision: {model.performanceMetrics.precision}</p>
              <p>Recall: {model.performanceMetrics.recall}</p>
              <p>F1-score: {model.performanceMetrics.f1Score}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-800">Model Description</h2>
              <p>{model.modelDescription}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-800">Advantages</h2>
              <p>{model.advantages}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-800">Applications</h2>
              <p>{model.applications}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
		</div>
	);
}
