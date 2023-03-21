import ParticlesBackground from '../components/ParticlesBackground';

export default function Error() {
  return (
    <div>
      <ParticlesBackground />
      <div className="container position-relative min-vh-100 d-flex justify-content-center align-items-center text-white fs-1">
        You have reached the end of the internet
      </div>
    </div>
  );
}
