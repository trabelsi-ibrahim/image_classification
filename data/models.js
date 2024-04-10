const models = [
    {
      id: '1',
      name: 'Fashion-MNIST',
      description: 'Fashion-MNIST is a dataset consisting of 70,000 grayscale images of size 28x28 pixels, categorized into 10 different clothing categories.',
      imageSrc: 'https://toppng.com/uploads/preview/image-imagenes-de-disenos-11562942007eny9do2lop.png',
      performanceMetrics: {
        accuracy: '90%',
        precision: '85%',
        recall: '88%',
        f1Score: '87%'
      },
      modelDescription: 'This model is a basic Convolutional Neural Network (CNN) trained on the Fashion-MNIST dataset for image classification.',
      advantages: 'Simple architecture, fast training.',
      applications: 'Fashion product categorization, clothing recommendation systems.'
    },
    {
      id: '2',
      name: 'LeNet',
      description: 'LeNet is one of the earliest convolutional neural networks designed for handwritten digit recognition.',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Neocognitron.png',
      performanceMetrics: {
        accuracy: '95%',
        precision: '92%',
        recall: '94%',
        f1Score: '93%'
      },
      modelDescription: 'LeNet consists of several layers of convolutional and pooling operations followed by fully connected layers.',
      advantages: 'Effective for simple image classification tasks, lightweight architecture.',
      applications: 'Handwritten digit recognition, optical character recognition.'
    },
    {
      id: '3',
      name: 'ResNet',
      description: 'ResNet is a deep residual neural network architecture that significantly outperforms previous models in image classification tasks.',
      imageSrc: 'https://miro.medium.com/max/1800/1*XbuW8WuRrAY5pC4t-9DZAQ.png',
      performanceMetrics: {
        accuracy: '98%',
        precision: '96%',
        recall: '97%',
        f1Score: '97%'
      },
      modelDescription: 'ResNet introduces skip connections that allow training of very deep networks without degradation in performance.',
      advantages: 'Highly effective for very deep networks, mitigates vanishing gradient problem.',
      applications: 'Image classification, object detection, image segmentation.'
    },
    // Add more models here
  ];
  
  export default models;
  