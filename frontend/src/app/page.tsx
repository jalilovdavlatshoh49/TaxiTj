import Slider from '../components/Slider';
import DriverButton from '../components/DriverButton';
import CitySelector from '../components/CitySelector';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-800 p-6">
      <Slider />
      <DriverButton />
      <CitySelector />
    </main>
  );
}