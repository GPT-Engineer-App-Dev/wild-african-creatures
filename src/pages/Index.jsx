import React, { useState } from 'react';
import { ChevronDown, Leaf } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AnimalCard = ({ name, description, habitat, diet }) => (
  <Card className="w-full max-w-sm mx-auto mb-6">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-4">{description}</p>
      <div className="flex items-center mb-2">
        <Leaf className="mr-2 text-green-500" />
        <span>Habitat: {habitat}</span>
      </div>
      <div className="flex items-center">
        <span className="font-semibold mr-2">Diet:</span>
        <span>{diet}</span>
      </div>
    </CardContent>
  </Card>
);

const AfricanAnimalsLanding = () => {
  const [showMore, setShowMore] = useState(false);

  const animals = [
    {
      name: "African Elephant",
      description: "The largest land animal, known for its intelligence and complex social structures.",
      habitat: "Savannas, forests, and deserts",
      diet: "Herbivore"
    },
    {
      name: "Lion",
      description: "The 'king of the jungle', famous for its majestic mane and powerful roar.",
      habitat: "Grasslands and savannas",
      diet: "Carnivore"
    },
    {
      name: "Giraffe",
      description: "The tallest land animal, with a distinctive long neck and spotted coat.",
      habitat: "Savannas, grasslands, and open woodlands",
      diet: "Herbivore"
    },
    {
      name: "Hippopotamus",
      description: "Semi-aquatic mammal with a massive body and powerful jaws.",
      habitat: "Rivers and lakes",
      diet: "Herbivore"
    },
    {
      name: "Cheetah",
      description: "The fastest land animal, capable of short bursts of incredible speed.",
      habitat: "Grasslands and open plains",
      diet: "Carnivore"
    },
    {
      name: "African Penguin",
      description: "Also known as the 'jackass penguin' due to its donkey-like bray.",
      habitat: "Coastal areas and islands",
      diet: "Piscivore"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-green-200 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover African Animals</h1>
        <p className="text-xl">Explore the diverse and magnificent wildlife of the African continent</p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.slice(0, showMore ? animals.length : 3).map((animal, index) => (
            <AnimalCard key={index} {...animal} />
          ))}
        </div>

        {!showMore && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowMore(true)} className="bg-orange-500 hover:bg-orange-600 text-white">
              Show More Animals <ChevronDown className="ml-2" />
            </Button>
          </div>
        )}
      </div>

      <footer className="mt-16 text-center">
        <p className="text-lg mb-4">Discover the wonders of African wildlife and help preserve these incredible species.</p>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Support Conservation Efforts
        </Button>
      </footer>

      <div className="fixed bottom-0 left-0 w-full h-16 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 opacity-50"></div>
    </div>
  );
};

export default AfricanAnimalsLanding;