import React from 'react';
import { Layers } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Layers className="h-8 w-8 text-primary-600" />
      <span className="text-xl font-bold text-gray-900"> Craftivo</span>
    </div>
  );
};

export default Logo
