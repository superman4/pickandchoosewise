
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

interface RipenessStage {
  name: string;
  description: string;
  color: string;
}

interface RipenessSliderProps {
  produce: {
    name: string;
    images: {
      main: string;
      ripe: string;
      underripe: string;
      overripe: string;
    };
  };
}

const RipenessSlider: React.FC<RipenessSliderProps> = ({ produce }) => {
  const [ripenessLevel, setRipenessLevel] = useState(2);
  
  // Define different stages of ripeness
  const ripenessStages: RipenessStage[] = [
    { name: 'Underripe', description: 'Not ready to eat yet', color: '#a4d966' },
    { name: 'Almost Ripe', description: 'Will be ready in 1-2 days', color: '#d9dd66' },
    { name: 'Perfectly Ripe', description: 'Perfect for eating now', color: '#ddab66' },
    { name: 'Overripe', description: 'Use immediately or for cooking', color: '#dd8166' },
    { name: 'Spoiled', description: 'Not recommended for consumption', color: '#a02100' }
  ];
  
  // Get the current ripeness stage based on the slider value
  const currentStage = ripenessStages[ripenessLevel];
  
  // Map ripeness level to image sources
  const getRipenessImage = () => {
    switch(ripenessLevel) {
      case 0: return produce.images.underripe;
      case 1: return produce.images.underripe;
      case 2: return produce.images.ripe;
      case 3: return produce.images.overripe;
      case 4: return produce.images.overripe;
      default: return produce.images.main;
    }
  };
  
  return (
    <Card className="ripeness-slider-container mb-8">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-2">Ripeness Guide</h3>
        <p className="text-muted-foreground mb-6">
          Move the slider to see how {produce.name} look at different stages of ripeness
        </p>
        
        <div className="slider-container mb-6">
          <Slider
            min={0}
            max={4}
            step={1}
            value={[ripenessLevel]}
            onValueChange={(values) => setRipenessLevel(values[0])}
            className="mb-2"
          />
          
          <div className="stage-labels grid grid-cols-5 text-xs text-muted-foreground">
            {ripenessStages.map((stage, index) => (
              <span 
                key={index} 
                className={`stage-label text-center ${index === ripenessLevel ? 'font-medium text-foreground' : ''}`}
              >
                {stage.name}
              </span>
            ))}
          </div>
        </div>
        
        <div className="ripeness-visualization grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="ripeness-image">
            <div className="aspect-square rounded-md overflow-hidden bg-muted">
              <img 
                src={getRipenessImage()} 
                alt={`${produce.name} at ${currentStage.name} stage`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div 
            className="ripeness-description p-4 rounded-md border" 
            style={{ borderColor: currentStage.color }}
          >
            <h4 className="font-semibold text-base mb-2" style={{ color: currentStage.color }}>
              {currentStage.name}
            </h4>
            <p className="mb-4">{currentStage.description}</p>
            
            <div className="indicators">
              <h5 className="font-medium mb-2">Look for:</h5>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {ripenessLevel === 0 && (
                  <>
                    <li>Firm texture with little to no give</li>
                    <li>Color is not fully developed</li>
                    <li>Typically lacks aroma</li>
                  </>
                )}
                {ripenessLevel === 1 && (
                  <>
                    <li>Slightly firm with minimal give when pressed</li>
                    <li>Color beginning to develop</li>
                    <li>Faint aroma starting to emerge</li>
                  </>
                )}
                {ripenessLevel === 2 && (
                  <>
                    <li>Gentle give when pressed</li>
                    <li>Full, vibrant color</li>
                    <li>Pleasant, sweet aroma</li>
                  </>
                )}
                {ripenessLevel === 3 && (
                  <>
                    <li>Very soft with significant give</li>
                    <li>Deeper color with possible blemishes</li>
                    <li>Strong, sometimes fermented aroma</li>
                  </>
                )}
                {ripenessLevel === 4 && (
                  <>
                    <li>Mushy texture</li>
                    <li>Dark spots or mold may be present</li>
                    <li>Unpleasant or alcoholic smell</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RipenessSlider;
